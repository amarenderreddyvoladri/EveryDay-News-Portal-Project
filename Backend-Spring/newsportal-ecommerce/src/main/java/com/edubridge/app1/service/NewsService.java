package com.edubridge.app1.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.edubridge.app1.repository.NewsRepository;

@Service
public class NewsService {
	
	@Autowired
	private NewsRepository repo;
}
