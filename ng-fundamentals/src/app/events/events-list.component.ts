import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventsService } from './shared/events.service';

@Component({
  templateUrl: 'events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any | undefined;

  constructor(
    private eventsService: EventsService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name: any) {
    this.toastrService.success(name);
  }
}
