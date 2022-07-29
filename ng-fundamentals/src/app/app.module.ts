import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';

import { NavBarComponent } from './nav/navbar.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorComponent } from './errors/error/error.component';
import { EventsService } from './events/shared/events.service';
import { EventRouteActivatorGuard } from './events/shared/event-route-activator.guard';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivatorGuard,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not save this event , do you really want to cancel ?'
    );
  }
  return true;
}
