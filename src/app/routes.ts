import { Routes } from '@angular/router';
import { Error404Component } from 'src/app/errors/404.component';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSesionComponent,
} from './events/index';
import {
  EventResolver
} from './events/shared/index';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver} },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  { path: 'events/session/new', component: CreateSesionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];
