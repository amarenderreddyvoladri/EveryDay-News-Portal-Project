import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news-list',
  standalone: false,

  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {

  newsList: any[] = [];

  error: string | null = null;

  filtersGNews = {
    query: 'trending', // Default search query
    lang: 'en',       // Default language
    country: 'in',    // Default country
    max: 10           // Maximum results
  };

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNewsGNews();
  }

  loadNewsGNews(): void {

    const { query, lang, country, max } = this.filtersGNews;

    this.newsService.fetchNewsGNews(query, lang, country, max).then((articlesGNews) => {
      if (articlesGNews.length > 0) {
        this.newsList = articlesGNews;
        this.error = null;
      } else {
        this.error = 'No news articles found.';
      }
    }).catch((error) => {
      // Handle different error codes
      if (error.status === 400) {
        this.error = 'Bad Request: Your request is invalid. Please check the input values.';
      } else if (error.status === 401) {
        this.error = 'Unauthorized: Your API key is wrong. Please check your API key.';
      } else if (error.status === 403) {
        this.error = 'Forbidden: You have reached your daily quota. The next reset is at 00:00 UTC.';
      } else if (error.status === 429) {
        this.error = 'Too Many Requests: You have made too many requests per second. Please try again later.';
      } else if (error.status === 500) {
        this.error = 'Internal Server Error: We had a problem with our server. Please try again later.';
      } else if (error.status === 503) {
        this.error = 'Service Unavailable: We are temporarily offline for maintenance. Please try again later.';
      } else {
        this.error = 'An unexpected error occurred. Please try again later.';
      }
    });
  }
 
  applyFiltersGNews(): void {
    this.loadNewsGNews();
  }
}

