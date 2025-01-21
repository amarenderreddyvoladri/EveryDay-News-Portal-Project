import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from '../../common/subscriber';
import { SubscriberService } from '../../service/subscriber.service';

@Component({
  selector: 'app-subscribers-list',
  standalone: false,

  templateUrl: './subscribers-list.component.html',
  styleUrl: './subscribers-list.component.css'
})
export class SubscribersListComponent {


  subscribers: Subscriber[] = [];

  constructor(
    private subscriberService: SubscriberService,
    private router: Router
  ) { }

  listSubscribers() {
    this.subscriberService.getSubscriberList().subscribe((data) => {
      this.subscribers = data
      console.log(data)
    });
  }

  removeSubscriber(id: number) {
    if (confirm('Are you sure to delete the Subscriber!')) {
      this.subscriberService.deleteSubscriber(id).subscribe((data) => {
        alert("Subscriber is Removed!!");

        this.listSubscribers(); // called to just display the refreshed data content.
      });
    }
  }

  ngOnInit() {
    this.listSubscribers();

  }
}

interface GetResponseSubscriber {
  _embedded: {
    subscribers: Subscriber[];
  };
}