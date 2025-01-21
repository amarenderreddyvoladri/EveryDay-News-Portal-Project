package com.edubridge.app1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.edubridge.app1.entity.NewsCategory;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "newsCategory", path = "news-category")
public interface NewsCategoryRepository extends JpaRepository<NewsCategory, Long> {
	
}