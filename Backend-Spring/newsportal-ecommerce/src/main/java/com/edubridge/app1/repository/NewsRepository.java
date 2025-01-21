package com.edubridge.app1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.edubridge.app1.entity.News;

@CrossOrigin("http://localhost:4200")
@Repository
public interface NewsRepository extends JpaRepository<News, Long> {

	
}
