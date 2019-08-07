import { Component } from '@angular/core';

@Component({
  selector: 'app-event-root',
  template: '<marquee>rulez</marquee><br /><blink>Angular rocks</blink>',
  styleUrls: ['./event-app.component.css']
})
export class EventAppComponent {
  title = 'angular-fundamentals';
}
