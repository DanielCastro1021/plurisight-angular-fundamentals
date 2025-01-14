import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { EventsService } from './events.service';

@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventsService: EventsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventsService.getEvents().pipe(map((events) => events));
  }
}
