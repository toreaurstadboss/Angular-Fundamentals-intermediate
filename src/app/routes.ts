import { EventDetailsComponent } from "src/app/events/event-details/event-details.component";
import { EventsListComponent } from "src/app/events/events-list.component";
import { Routes } from '@angular/router';
import { CreateEventComponent } from "src/app/events/shared/create-event.component";
import { Error404Component } from "src/app/errors/404.component";
import { EventRouteActivator } from "src/app/events/event-details/event-route-activator.service";
import { EventListResolver } from './events/shared/events-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver} },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator ]  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
