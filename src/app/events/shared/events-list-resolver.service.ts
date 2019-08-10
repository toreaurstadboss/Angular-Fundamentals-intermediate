import { Resolve } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventService } from './event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(@Inject(EventService) private eventService: EventService) {

  }

  resolve() {
   return this.eventService.getEvents();
  }

}
