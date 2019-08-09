import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService, TOASTR_TOKEN, Toastr } from "src/app/common/toastr.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from './routes';
import { Error404Component } from "src/app/errors/404.component";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSesionComponent,
  SessionListComponent
} from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from "src/app/common/collapsible-well.component";
import { DurationPipe } from "src/app/events/shared";

declare let toastr: Toastr

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventAppComponent,
    CreateSesionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    EventsListComponent,
    NavBarComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    Error404Component
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    EventService,
    AuthService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
