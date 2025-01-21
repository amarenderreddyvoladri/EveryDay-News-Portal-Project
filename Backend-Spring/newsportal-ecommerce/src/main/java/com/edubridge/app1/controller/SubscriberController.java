package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.entity.Subscriber;
import com.edubridge.app1.service.SubscriberService;

@RestController
@RequestMapping("/api/subscriber")
@CrossOrigin(origins = "http://localhost:4200")
public class SubscriberController {

	@Autowired
	private SubscriberService subscriberService;

	@GetMapping
	public List<Subscriber> getAllSubscribers() {
		return subscriberService.getAllSubscribers();
	}
}
