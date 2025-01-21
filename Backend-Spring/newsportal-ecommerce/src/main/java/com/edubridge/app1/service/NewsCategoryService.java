package com.edubridge.app1.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.entity.News;
import com.edubridge.app1.entity.NewsCategory;
import com.edubridge.app1.repository.NewsCategoryRepository;
import com.edubridge.app1.repository.NewsRepository;

@Service
public class NewsCategoryService {

	@Autowired
	private NewsCategoryRepository newsCategoryRepository;

	@Autowired
	private NewsRepository newsRepository;

	public News addNewsToCategory(Long categoryId, News news) {

		Optional<NewsCategory> optional = newsCategoryRepository.findById(categoryId);

		if (optional.isPresent()) {
			NewsCategory category = optional.get();
			news.setCategory(category);
			return newsRepository.save(news);
		} else {
			throw new RuntimeException("Category not found");
		}
	}

}
