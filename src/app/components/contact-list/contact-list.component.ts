import { Component } from '@angular/core';
import { Contact } from '../../common/contact';
import { ContactService } from '../../service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: false,

  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  contacts: Contact[] = []; // Array to store fetched contacts

  constructor(
    private contactService: ContactService,  // Inject ContactService
    private router: Router  // Inject Router to navigate
  ) { }

  // Fetch the list of contacts
  listContacts() {
    this.contactService.getContactList().subscribe((data) => {
      console.log(data);
      this.contacts = data;
      console.log(data);
    });
  }

  // Optional: Method to view/edit a specific contact (if needed in the future)
  showContactEdit(id: number) {
    this.router.navigate(['contact-edit', id]);  // Navigate to an edit form for the contact
  }

  ngOnInit(): void {
    this.listContacts(); // Load contacts when the component is initialized
  }

  // Function to handle the reply button click
  replyNow(contact: Contact): void {
    this.contactService.updateRepliedStatus(contact.id).subscribe((updatedContact) => {
      contact.replied = updatedContact.replied;  // Update the replied status in the UI
      
      alert(`Replied to ${contact.name}`);

    });
  }

  openEmailClient(customerEmail: string): void {
    window.location.href = `mailto:${customerEmail}?subject=Response&body=Hello, I would like to reply to your message.`;
    // Change button color to green once clicked

  }
}

interface GetResponseContact {
  _embedded: {
    contacts: Contact[];  // 'contacts' will be the array of Contact objects
  };
}

