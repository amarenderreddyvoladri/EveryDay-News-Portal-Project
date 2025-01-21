package com.edubridge.app1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.app1.entity.News;
import com.edubridge.app1.service.NewsCategoryService;
// angular url acess by angular or any

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class NewsCategoryController {

	@Autowired
	private NewsCategoryService newsCategoryService;

	/*
	 * http://localhost:8181/api/v1/category/1/news
	 */

	@PostMapping("/category/{categoryId}/news")
	public ResponseEntity<News> addnewsToCategory(@PathVariable Long categoryId, @RequestBody News news) {
		newsCategoryService.addNewsToCategory(categoryId, news);

		return new ResponseEntity<>(HttpStatus.OK);
	}

}
