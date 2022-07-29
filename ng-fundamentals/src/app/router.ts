import { Routes } from '@angular/router';
import { ErrorComponent } from './errors/error/error.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventRouteActivatorGuard } from './events/shared/event-route-activator.guard';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: 'events', component: EventsListComponent },
  {
    path: 'events/:id',
    component: EventsDetailsComponent,
    canActivate: [EventRouteActivatorGuard],
  },
  { path: '404', component: ErrorComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
