import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { EventService } from './event.service';

@Injectable()
export class EventResolver implements Resolve<any> {

  constructor(@Inject(EventService) private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
   // tslint:disable-next-line: no-string-literal
   return this.eventService.getEvent(route.params['id']);
  }

}
