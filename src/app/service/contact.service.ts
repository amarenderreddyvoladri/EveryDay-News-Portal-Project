import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contact } from '../common/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8181/api/contacts'; // Adjust the URL to match your backend

  constructor(private http: HttpClient) { }

  // Create a new contact
  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact);
  }

  // Get a list of all contacts (Optional: for admin functionality)
  getContactList(): Observable<Contact[]> {
    return this.http.get<GetResponseContact>(this.baseUrl)
      .pipe(map((response) => response._embedded.contacts));  // Extract the 'contacts' array from the response
  }
  

  // Delete a contact by ID
  // deleteContact(id: number): Observable<void> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete<void>(url);
  // }

  updateRepliedStatus(contactId: number): Observable<Contact> {
    const url = `${this.baseUrl}/${contactId}/reply`;
    return this.http.put<Contact>(url, {});  // Empty body is fine, we just need the endpoint
  }

}

interface GetResponseContact {
  _embedded: {
    contacts: Contact[];  // The 'contacts' field contains the list of contact objects
  };
}

