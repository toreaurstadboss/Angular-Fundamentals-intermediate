
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { EventService } from "src/app/events/shared/event.service";
import { Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left: 20px; padding-right: 20px; }
  .event-image: { height: 100px; }
  `
  ]
})
export class EventDetailsComponent implements OnInit {

 ngOnInit(): void {
  //  debugger
 let id = +this.route.snapshot.params['id'];
 this.event = this.eventService.getEvent(id);
}

  event: any;

  constructor(@Inject(EventService)private eventService: EventService, @Inject(ActivatedRoute) private route: ActivatedRoute) {

  }


}
