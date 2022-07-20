import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <h2>{{ event.name }}</h2>
      <hr />
      <div class="well hoverwell thumbnail">
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: \${{ event.price }}</div>
        <div>
          <span>Location: {{ event.location.address }}</span>
          <span>&nbsp;</span>
          <span> {{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/src/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };
}
