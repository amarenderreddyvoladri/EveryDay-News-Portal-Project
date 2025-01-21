import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Subscriber } from '../common/subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  // http://localhost:8181/api/subscribers

  constructor(private http: HttpClient) { }

  // adding subscriber details from webpage.
  createSubscriber(subscriber: Subscriber) {
    const url = "http://localhost:8181/api/subscribers";

    return this.http.post<Subscriber>(url, subscriber);
  }

  getSubscriberList() {

    const url = "http://localhost:8181/api/subscribers";

    return this.http.get<GetResponseSubscriber>(url).pipe(map((response) => response._embedded.subscribers));
  }


  deleteSubscriber(id: number) {
    const url = 'http://localhost:8181/api/subscribers/' + id;
    return this.http.delete<Subscriber>(url);
  }
  


  getSubscriberById(id: number) {

    const url = 'http://localhost:8181/api/subscribers/' + id;

    return this.http.get<Subscriber>(url);
  }
}

interface GetResponseSubscriber {
  _embedded: {
    subscribers : Subscriber[];
  };
}
