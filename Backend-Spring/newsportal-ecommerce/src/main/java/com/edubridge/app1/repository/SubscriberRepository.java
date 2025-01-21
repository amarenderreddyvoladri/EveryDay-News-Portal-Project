package com.edubridge.app1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.edubridge.app1.entity.Subscriber;

@CrossOrigin("http://localhost:4200")
@Repository
public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {
	

}
