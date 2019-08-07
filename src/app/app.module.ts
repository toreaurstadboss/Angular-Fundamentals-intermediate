import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    NavBarComponent,
    EventThumbnailComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }
