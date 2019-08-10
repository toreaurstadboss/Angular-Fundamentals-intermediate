import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Toastr } from "src/app/common/toastr.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from './routes';
import { Error404Component } from "src/app/errors/404.component";
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  LocationValidator,
  CreateSesionComponent,
  SessionListComponent,
  VoterService
} from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from "src/app/events/shared";
import { UpvoteComponent } from './events/event-details/upvote.component';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

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
    SimpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
    EventThumbnailComponent,
    CreateEventComponent,
    Error404Component,
    UpvoteComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    EventService,
    AuthService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
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
