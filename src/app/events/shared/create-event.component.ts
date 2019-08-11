import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Inject } from "@angular/core";
import { EventService } from "./event.service";
import { IEvent } from ".";

@Component({
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
    `
  ],
  templateUrl: "./create-event.component.html"
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent: IEvent;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(EventService) private eventService: EventService
  ) {}

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues).subscribe((savedEvent: IEvent) => {
      console.log("Saved event: " + JSON.stringify(savedEvent));
      this.isDirty = false;
      this.router.navigate(["/events"]);
    });
  }

  cancel() {
    this.router.navigate(["/events"]);
  }
}
