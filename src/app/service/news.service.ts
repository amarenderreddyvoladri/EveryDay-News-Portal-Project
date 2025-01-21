import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { News } from '../common/news';
import { NewsCategory } from '../common/news-category';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  /* 
  http://localhost:8181/app1/news
  */

  constructor(private http: HttpClient) {
  }

  // adding News details from webpage.

  // http://localhost:8181/api/v1/news-category/1/news
  // adding News details from webpage.

  createNews(id: number, news: News) {

    const url = "http://localhost:8181/api/v1/category/" + id + "/news";

    return this.http.post<News>(url, news);
  }

  getNewsList() {

    const url = 'http://localhost:8181/api/news';

    return this.http.get<GetResponseNews>(url).pipe(map((response) => response._embedded.news));
  }


  createNewsCategory(newsCategory: NewsCategory) {

    const url = 'http://localhost:8181/api/news-category';

    return this.http.post<NewsCategory>(url, newsCategory);
  }

  deleteNews(id: number) {

    const url = 'http://localhost:8181/api/news/' + id;
    
    return this.http.delete<News>(url)
  }

  updateNews(id: number, news: News) {

    const url = 'http://localhost:8181/api/news/' + id;

    return this.http.put<News>(url, news)
  }

  getNewsById(id: number, news: News) {

    const url = 'http://localhost:8181/api/news/' + id;

    return this.http.get<News>(url);
  }

  // ---------------------------------------------------------------------------------------------------

  // This code is for Only HOME PAGE

  private apiUrlGnewsForHome = 'https://gnews.io/api/v4/search';
  private apiKeyForHome = 'eb937d3dd330585644420cf26783519a';

  fetchTopNewsForHome(lang: string, country: string): Promise<any> {

    const url2 = `${this.apiUrlGnewsForHome}?q=headlines&lang=${lang}&country=${country}&max=10&apikey=${this.apiKeyForHome}`;

    return fetch(url2)
      .then((response) => response.json())
      .then((data) => data.articles || [])
      .catch((error) => {
        console.error('Error fetching news:', error);
        return [];

      });
  }
  // ---------------------------------------------------------------------------------------------------

  // This code is for Only news-list PAGE.

  private apiKeyGNews = 'eb937d3dd330585644420cf26783519a';
  private baseUrlGNews = 'https://gnews.io/api/v4/search';

  fetchNewsGNews(query: string, lang: string, country: string, max: number): Promise<any[]> {

    const url1 = `${this.baseUrlGNews}?q=${query}&lang=${lang}&country=${country}&max=${max}&apikey=${this.apiKeyGNews}`;

    return fetch(url1)
      .then((response) => response.json())
      .then((data) => data.articles || [])
      .catch((error) => {
        console.error('Error fetching news:', error);
        return [];
      });
  }

  // ---------------------------------------------------------------------------------------------------

}

interface GetResponseNews {
  _embedded: {
    news: News[];
  };

}
