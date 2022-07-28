import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any[] | undefined;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }
}
