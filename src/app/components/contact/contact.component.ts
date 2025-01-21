import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../common/contact';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactFormGroup: FormGroup;

  successMessage: string = '';
  errorMessage: string = '';

  contact: Contact = { id: 0, name: '', email: '', message: '', submittedAt: new Date(), replied: false };

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize the form group with stricter validation
    this.contactFormGroup = this.formBuilder.group({
      contact: this.formBuilder.group({
        // Name field validation (only letters and spaces)
        name: [
          '',
          [
            Validators.required,
            Validators.pattern('^[A-Za-zÀ-ÿ\\s]+$')  // Allows only letters (including accented) and spaces
          ]
        ],
        // Email field validation (valid email format)
        email: [
          '',
          [
            Validators.required,
            Validators.email  // Standard email validation
          ]
        ],
        // Message field validation (non-empty text)
        message: [
          '',
          [
            Validators.required,
            Validators.minLength(5)  // Ensures the message is not too short
          ]
        ]
      }),
    });
  }

  // Getters for form controls
  get name() {
    return this.contactFormGroup.get('contact.name');
  }

  get email() {
    return this.contactFormGroup.get('contact.email');
  }

  get message() {
    return this.contactFormGroup.get('contact.message');
  }

  // Submit function
  onSubmit(): void {
    if (this.contactFormGroup.invalid) {
      this.contactFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    // Prepare contact data
    let contactData = this.contactFormGroup.controls['contact'].value;

    // Call the service to create the contact
    this.contactService.createContact(contactData).subscribe({
      next: (response) => {
        this.successMessage = 'Your message has been sent successfully!';
        console.log("Successfully Submitted a Contact Request.");
        this.errorMessage = 'Please provide complete details!';

        // Reset form after successful submission
        this.contactFormGroup.reset();  // Reset the form group to clear the form fields

        this.contact = { id: 0, name: '', email: '', message: '', submittedAt: new Date(), replied: false };  // Reset form
        // this.router.navigateByUrl('/contact-list');

        this.contactFormGroup.controls['contact'].reset();
      },
      error: (error) => {
        this.successMessage = '';
        this.errorMessage = 'Failed to send your message. Please try again.';
        console.error('Error:', error);
      },
    });
  }
}
