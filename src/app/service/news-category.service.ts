import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contact } from '../common/contact';
import { NewsCategory } from '../common/news-category';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoryService {

  constructor(private http: HttpClient) { }

  createNewsCategory(newsCategory: NewsCategory) {

    const url = "http://localhost:8181/api/news-category";

    return this.http.post<NewsCategory>(url, newsCategory);
  }

  getNewsCategoryList() {

    const url = "http://localhost:8181/api/news-category";

    return this.http.get<GetResponseNewsCategory>(url)
      .pipe(map((response) => response._embedded.newsCategory));
  }

  deleteNewsCategory(id: number) {

    const url = 'http://localhost:8181/api/news-category/' + id;

    return this.http.delete<NewsCategory>(url)
  }

  getNewsCategory(id: number) {

    const url = 'http://localhost:8181/api/news-category/' + id;

    return this.http.get<NewsCategory>(url)
  }

  updateNewsCategory(id: number, newsCategory: NewsCategory) {

    const url = 'http://localhost:8181/api/news-category/' + id;

    return this.http.put<NewsCategory>(url, newsCategory)
  }

  // New method for creating a Contact
  createContact(contact: Contact): Observable<Contact> {

    const url = 'http://localhost:8181/api/contact';

    return this.http.post<Contact>(url, contact);
  }

}

interface GetResponseNewsCategory {
  _embedded: {
    newsCategory: NewsCategory[];
  };

}
