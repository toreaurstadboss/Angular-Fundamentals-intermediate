import { EventDetailsComponent } from "src/app/events/event-details/event-details.component";
import { EventsListComponent } from "src/app/events/events-list.component";
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
