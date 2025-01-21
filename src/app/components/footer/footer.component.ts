import { Component } from '@angular/core';
import { Subscriber } from '../../common/subscriber';
import { SubscriberService } from '../../service/subscriber.service';


@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  subscriberEmail: string = '';

  subscriptionMessage: string = '';

  constructor(private subscriberService: SubscriberService) { }

  onSubscribe() {
    const newSubscriber: Subscriber = {
      email: this.subscriberEmail
    };


    // Pass only the newSubscriber object, not the id
    this.subscriberService.createSubscriber(newSubscriber).subscribe(
      response => {
        console.log('Subscriber added:', response);
      },
      error => {
        console.error('Error adding subscriber:', error);
      }
    );

    this.subscriptionMessage = '"Subscription successful! Stay tuned for updates !!"';
    this.subscriberEmail = "";
  }
}  


