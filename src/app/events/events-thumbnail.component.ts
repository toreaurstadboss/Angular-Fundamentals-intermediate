import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  styles:[`
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb; }
  `],
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div>Time: {{event.time}}</div>
  <div>Price: \${{event.price}}</div>
   <div>
   <span>Address: {{event.location.address}}</span>&nbsp;
   <span class="pad-left">City: {{event.location.city}}</span>&nbsp;
   <span>Country: {{event.location.country}}</span>
   </div>
  </div>
  <button class="btn btn-primary" (click)="handleClick($event)">Click me</button>`
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  someProperty:any = "some value";

  handleClick($event): void {
    this.eventClick.emit(JSON.stringify(this.event));
  }

  logFoo() {
   console.log('foo');
  }

}
