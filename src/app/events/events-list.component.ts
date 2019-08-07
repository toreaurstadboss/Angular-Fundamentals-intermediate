import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {


  handleEventClicked(data) {
    console.log('received: ' + data);
  }

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '19/10/18',
    time: '10:00am',
    price: 599.99,
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'UK'
    }
  };

}
