import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root',
})
export class EventRouteActivatorGuard implements CanActivate {
  constructor(private eventService: EventsService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const eventExists: boolean = !!this.eventService.getEvent(
      +route.params['id']
    );
    if (!eventExists) this.router.navigate(['/404']);
    return eventExists;
  }
}
