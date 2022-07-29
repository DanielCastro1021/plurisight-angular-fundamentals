import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventsService } from './events-details/shared/events.service';

@Component({
  templateUrl: 'events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any[] | undefined;

  constructor(
    private eventsService: EventsService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(name: any) {
    this.toastrService.success(name);
  }
}
