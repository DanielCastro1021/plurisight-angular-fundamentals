import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css'],
})
export class EventsDetailsComponent implements OnInit {
  event: any;
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.event = this.eventsService.getEvent(1);
  }
}
