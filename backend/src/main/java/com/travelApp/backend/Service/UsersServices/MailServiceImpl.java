package com.travelApp.backend.Service.UsersServices;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService{
    private final JavaMailSender mailSender;

    public MailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(MailServiceImpl.class);

    @Value("${mail.enabled:false}")
    private boolean mailEnabled;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Override
    public boolean sendRegisterMail(String email, String body, Integer val) {
        if(!mailEnabled){
            System.out.println("✉️ Mail is disabled. Skipping send.");
            return false;
        }
        try{
            //logger
            logger.info("send register mail:{}", email);
            String heading;
            if(val == 1){
                heading = "registering";
            }
            else{
                heading = "forgot password";
            }

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(email);
            message.setSubject("Otp for for "+heading+" to our website");
            message.setText(body);
            mailSender.send(message);
            logger.info("mail send to email:{}", email);
            return true;
        } catch (Exception e) {
            //logger
            logger.error("send register mail failed in service");

            return false;
        }
    }

    @Override
    public boolean sendFlightConfirmationMail(String email, String body){
        if(!mailEnabled){
            System.out.println("✉️ Mail is disabled. Skipping send.");
            return false;
        }
        try{
            //logger
            logger.info("send flight confirmation mail:{}", email);
            String heading="Flight confirmation";

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(email);
            message.setSubject("Hurray! Flight Confirmation Done 🥳");
            message.setText(body);
            mailSender.send(message);
            logger.info("flight mail send to email:{}", email);
            return true;
        } catch (Exception e) {
            //logger
            logger.error("flight send mail failed in service");
            return false;
        }
    }

    @Override
    public boolean sendHotelConfirmationMail(String email, String body){
        if(!mailEnabled){
            System.out.println("✉️ Mail is disabled. Skipping send.");
            return false;
        }
        try{
            //logger
            logger.info("send hotel confirmation mail:{}", email);
            String heading="Hotel confirmation";

            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(email);
            message.setSubject("Hurray! Hotel Confirmation Done 🥳");
            message.setText(body);
            mailSender.send(message);
            logger.info("Hotel mail send to email:{}", email);
            return true;
        } catch (Exception e) {
            //logger
            logger.error("Hotel send mail failed in service");
            return false;
        }
    }
}
