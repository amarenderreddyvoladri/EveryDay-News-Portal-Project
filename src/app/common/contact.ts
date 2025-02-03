
export class Contact {
    id: number; // Optional for creating a new contact
    name: string;
    email: string;
    message: string;
    submittedAt: Date; // Optional, managed by the backend
    replied: boolean = false;
}


