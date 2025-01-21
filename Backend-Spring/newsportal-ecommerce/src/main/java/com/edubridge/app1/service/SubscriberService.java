package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.edubridge.app1.entity.Subscriber;
import com.edubridge.app1.repository.SubscriberRepository;

@Service
public class SubscriberService {

	@Autowired
	private SubscriberRepository subscriberRepository;

	@Autowired
	private JavaMailSender mailSender;

    // Add new subscriber
    public Subscriber addSubscriber(String email) {
        Subscriber subscriber = new Subscriber();
        subscriber.setEmail(email);
        return subscriberRepository.save(subscriber);
    }

    // Get all subscribers
    public List<Subscriber> getAllSubscribers() {
        return subscriberRepository.findAll();
    }
	
}
