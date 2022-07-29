import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { EventsService } from './events/events-details/shared/events.service';
import { NavBarComponent } from './nav/navbar.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
  ],
  providers: [EventsService, ToastrService],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
