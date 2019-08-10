
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Inject } from "@angular/core";
import { EventService } from './event.service';

@Component({
  styles: [ `
  em { float: right; color: #E05C65; padding-left: 10px; }
  .error input, .error select, .error textarea { background-color: #E3C3C5; }
  .error ::-webkit-input-placeholder { color: #999 };
  `
  ],
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
  isDirty: boolean = true;

  constructor(@Inject(Router) private router: Router, @Inject(EventService) private eventService: EventService) {

  }

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
