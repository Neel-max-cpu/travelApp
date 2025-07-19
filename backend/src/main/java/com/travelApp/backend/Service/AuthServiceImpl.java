package com.travelApp.backend.Service;

import com.travelApp.backend.Dto.UsersReq;
import com.travelApp.backend.Entity.ForgetPasswordLogger;
import com.travelApp.backend.Entity.PasswordMapping;
import com.travelApp.backend.Entity.RegisterUserOtp;
import com.travelApp.backend.Entity.Users;
import com.travelApp.backend.Expections.BadRequestsException;
import com.travelApp.backend.Expections.ForbiddenException;
import com.travelApp.backend.Expections.NotFoundException;
import com.travelApp.backend.Helper.CreateOtp;
import com.travelApp.backend.Repo.ForgetPasswordLoggerRepo;
import com.travelApp.backend.Repo.PasswordMappingRepo;
import com.travelApp.backend.Repo.RegisterUserOtpRepo;
import com.travelApp.backend.Repo.UsersRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {
    private final UsersRepo usersRepo;
    private final MailService mailService;
    private final RegisterUserOtpRepo registerUserOtpRepo;
    private final PasswordEncoder passwordEncoder;
    private final PasswordMappingRepo passwordMappingRepo;
    private final JwtService jwtService;
    private final ForgetPasswordLoggerRepo forgetPasswordLoggerRepo;

    public AuthServiceImpl(UsersRepo usersRepo, RegisterUserOtpRepo registerUserOtpRepo,
                           MailService mailService, PasswordEncoder passwordEncoder,
                           PasswordMappingRepo passwordMappingRepo, JwtService jwtService,
                           ForgetPasswordLoggerRepo forgetPasswordLoggerRepo) {
        this.usersRepo = usersRepo;
        this.registerUserOtpRepo = registerUserOtpRepo;
        this.mailService = mailService;
        this.passwordEncoder = passwordEncoder;
        this.passwordMappingRepo = passwordMappingRepo;
        this.jwtService = jwtService;
        this.forgetPasswordLoggerRepo = forgetPasswordLoggerRepo;
    }



    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(AuthServiceImpl.class);

    boolean sendEmail(String email, String otp, Integer val){
        //logger
        logger.info("email sent from the auth service");
        String service;
        if(val==1){
            service = "register";
        }
        else{
            service = "resetting Password";
        }

        String body = "Hello ,\n\nYour OTP for "+service+" is: " + otp +
                "\n\nThis OTP is valid for 10 minutes." +
                "\n\nIf you did not request this, please ignore." +
                "\n\n- TravelApp Team";
        return mailService.sendRegisterMail(email, body);
    }

    @Override
    public boolean sendOtp(UsersReq req){
        String email = req.getEmail();
        //create 6 digit otp
        String otp = CreateOtp.generateOtp();

        boolean mailSent = sendEmail(email, otp, 1);
        if(!mailSent){return false;}

        //save to db
        RegisterUserOtp registerUserOtp = new RegisterUserOtp();
        registerUserOtp.setEmail(email);
        registerUserOtp.setOtp(otp);
        registerUserOtp.setIsActive('Y');
        registerUserOtp.setCreatedOn(LocalDateTime.now());

        registerUserOtpRepo.save(registerUserOtp);
        return true;
    }

    @Override
    public Users registerUser(UsersReq req){

        //logger
        logger.info("registering user in the authService");

        //default role 2 for client
        try{
            String email = req.getEmail();
            String otp = req.getOtp();
            String name = req.getName();
            String password = req.getPassword();
            String confirmPassword = req.getConfirmPassword();

            if(!password.equals(confirmPassword)){
                throw new BadRequestsException("Passwords do not match");
            }

            RegisterUserOtp registerUserOtp = registerUserOtpRepo.findTopByEmailAndOtpAndIsActive(email, otp, 'Y')
                    .orElseThrow(()->new BadRequestsException("Invalid or expired otp!"));

            // time diff <= 10min
            Duration diff = Duration.between(registerUserOtp.getCreatedOn(), LocalDateTime.now());
            if (diff.toMinutes() > 10) {
                throw new BadRequestsException("OTP has expired.");
            }
            //otp verified
            registerUserOtp.setIsActive('N');
            registerUserOtpRepo.save(registerUserOtp);

            //save user
            Users users = new Users();
            users.setEmail(email);
            users.setName(name);
            users.setPassword(passwordEncoder.encode(password));
            users.setRoleId(2);     //default
            users.setCreatedOn(LocalDateTime.now());

            usersRepo.save(users);

            // map password to history
            Optional<Users> optional = usersRepo.findByEmail(email);
            Users mappingUser = optional.get();
            PasswordMapping passwordMapping = new PasswordMapping();
            passwordMapping.setUserId(mappingUser.getId());
            passwordMapping.setUserName(mappingUser.getName());
            passwordMapping.setPassword(password);
            passwordMapping.setCreatedOn(LocalDateTime.now());
            passwordMapping.setLastModified(LocalDateTime.now());

            passwordMappingRepo.save(passwordMapping);

            //logger
            logger.info("registering user successfully in service");

            return users;

        } catch (Exception e) {
            //logger
            logger.error("Registration failed in service");

            throw new BadRequestsException("Error registering user");
        }
    }

    @Override
    public ResponseEntity<?>signIn(UsersReq req){
        //logger
        logger.info("logIn user in the authService");
        try{
            if(req.getEmail()==null || req.getPassword()==null){
                throw new BadRequestsException("Email and Password cannot be empty!");
            }
            Users getUser = usersRepo.findByEmail(req.getEmail())
                    .orElseThrow(()->new NotFoundException("User not found with that email!"));

            if(!passwordEncoder.matches(req.getPassword(), getUser.getPassword())){
                throw  new ForbiddenException("Passwords do not match!");
            }

            //generate token
            String token = jwtService.generateToken(getUser);
            Map<String,Object> response = new HashMap<>();
            response.put("token", token);
            response.put("userId",  getUser.getId());
            response.put("email", getUser.getEmail());
            response.put("name", getUser.getName());

            //logger
            logger.info("logging in user successfully in service");

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            //logger
            logger.error("logIn failed in service");
            throw new BadRequestsException("Invalid or expired password!");
        }
    }

    @Override
    public boolean sendOtpForgotPassword(UsersReq req){
        String email = req.getEmail();

        Optional<Users> optional = usersRepo.findByEmail(email);
        if(optional.isEmpty()){
            throw new NotFoundException("User not found with that email!");
        }

        Users mappingUser = optional.get();

        //create 6 digit otp
        String otp = CreateOtp.generateOtp();
        boolean mailSent = sendEmail(email, otp, 2);
        if(!mailSent){return false;}


        //save to db
        ForgetPasswordLogger log = new ForgetPasswordLogger();
        log.setUserId(mappingUser.getId());
        log.setUserName(mappingUser.getName());
        log.setEmail(email);
        log.setOtp(otp);
        log.setIsActive('Y');
        log.setCreatedOn(LocalDateTime.now());

        forgetPasswordLoggerRepo.save(log);
        return true;
    }

    @Override
    public ResponseEntity<?>forgetPass(UsersReq req){
        logger.info("forgetPass user in the authService");
        try{
            String password =  req.getPassword();
            String email =  req.getEmail();
            String otp = req.getOtp();
            String confirmPassword = req.getConfirmPassword();

            if(!password.equals(confirmPassword)){
                throw new BadRequestsException("Passwords do not match");
            }

            ForgetPasswordLogger log = forgetPasswordLoggerRepo.findTopByEmailAndOtpAndIsActive(email, otp, 'Y')
                    .orElseThrow(()->new BadRequestsException("Invalid or expired otp!"));

            // time diff <= 10min
            Duration diff = Duration.between(log.getCreatedOn(), LocalDateTime.now());
            if (diff.toMinutes() > 10) {
                throw new BadRequestsException("OTP has expired.");
            }
            //otp verified
            log.setIsActive('N');
            forgetPasswordLoggerRepo.save(log);

            Optional<Users> optional = usersRepo.findByEmail(email);
            Users mappingUser = optional.get();

            // hash it and save it users
            mappingUser.setPassword(passwordEncoder.encode(password));
            usersRepo.save(mappingUser);

            // map password to history
            PasswordMapping passwordMapping = passwordMappingRepo.findByUserId(mappingUser.getId());
            passwordMapping.setPassword(password);
            passwordMapping.setLastModified(LocalDateTime.now());

            passwordMappingRepo.save(passwordMapping);

            //logger
            logger.info("forget password changed successfully in service");
            Map<String,Object> response = new HashMap<>();
            response.put("message", "Password changed successfully!");
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            throw new BadRequestsException("Error forgetPass authService");
        }
    }

    @Override
    public ResponseEntity<?>resetPass(UsersReq req, String token){
        logger.info("resetPass user in the authService");
        try{
            Integer userId = jwtService.extractUserId(token);
            String password =  req.getPassword();
            String confirmPassword = req.getConfirmPassword();

            if(!password.equals(confirmPassword)){
                throw new BadRequestsException("Passwords do not match");
            }

            Optional<Users> optional = usersRepo.findById(userId);
            Users mappingUser = optional.get();

            // hash it and save it users
            mappingUser.setPassword(passwordEncoder.encode(password));
            usersRepo.save(mappingUser);

            // map password to history
            PasswordMapping passwordMapping = passwordMappingRepo.findByUserId(userId);
            passwordMapping.setPassword(password);
            passwordMapping.setLastModified(LocalDateTime.now());

            passwordMappingRepo.save(passwordMapping);

            //logger
            logger.info("resetPass password changed successfully in service");
            Map<String,Object> response = new HashMap<>();
            response.put("message", "Password changed successfully!");
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            throw new BadRequestsException("Error resetPass authService");
        }
    }
}
