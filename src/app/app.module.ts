import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';
import { EventAppComponent } from './event-app.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent
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
