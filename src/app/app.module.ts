import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "src/app/common/toastr.service";
import { EventDetailsComponent } from "src/app/events/event-details/event-details.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventAppComponent,
    EventsListComponent,
    NavBarComponent,
    EventDetailsComponent,
    EventThumbnailComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }
