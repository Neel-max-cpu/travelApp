package com.travelApp.backend.Service;

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
}
