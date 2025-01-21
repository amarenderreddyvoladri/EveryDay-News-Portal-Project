package com.edubridge.app1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.app1.entity.Contact;
import com.edubridge.app1.repository.ContactRepository;

@Service
public class ContactService {

	@Autowired
	private ContactRepository contactRepository;

	public Contact saveContact(Contact contact) {
		return contactRepository.save(contact);
	}

	// Method to get all contacts
	public List<Contact> getAllContacts() {
		return contactRepository.findAll(); // Fetches all contacts from DB
	}

//    This method is used to update the Replied status.

	public Contact updateRepliedStatus(Long contactId) {
		Contact contact = contactRepository.findById(contactId)
				.orElseThrow(() -> new RuntimeException("Contact not found"));
		contact.setReplied(true); // Mark as replied
		return contactRepository.save(contact); // Save the updated contact
	}
}
