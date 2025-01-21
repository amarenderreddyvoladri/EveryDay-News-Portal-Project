package com.edubridge.app1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.edubridge.app1.entity.Contact;
import com.edubridge.app1.service.ContactService;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular
public class ContactController {

	@Autowired
	private ContactService contactService;

	// GET all contacts
	@GetMapping
	public List<Contact> getAllContacts() {
		return contactService.getAllContacts(); // Fetches all contacts
	}

	@PostMapping
	public ResponseEntity<String> saveContact(@RequestBody Contact contact) {
		contactService.saveContact(contact);
		return ResponseEntity.ok("Contact saved successfully!");
	}

//    This method is to fetch the contact with ID to reply.
	@PutMapping("/{id}/reply")
	public Contact replyToContact(@PathVariable Long id) {
		return contactService.updateRepliedStatus(id); // Update replied status
	}
}
