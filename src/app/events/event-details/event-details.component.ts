
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { EventService } from "src/app/events/shared/event.service";
import { Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px; }
  .event-image { height: 100px; }
  a { cursor: pointer }
  `
  ]
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'name';

 ngOnInit(): void {
  //  debugger
 let id = +this.route.snapshot.params['id'];
 this.event = this.eventService.getEvent(id);
}

  constructor(@Inject(EventService)private eventService: EventService, @Inject(ActivatedRoute) private route: ActivatedRoute) {

  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;

  }

  cancelAddSession(): void {
    this.addMode = false;
  }

  addSession(): void {
    this.addMode = true;
    if (this.event) {
      let session: ISession = {
        id: 1,
        name: 'a',
        presenter: 's',
        abstract: '',
        level: '',
        voters: [],
        duration: undefined
      };
      this.event.sessions.push(session);
    }

  }


}
