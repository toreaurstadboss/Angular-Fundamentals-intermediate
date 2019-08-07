import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  styles:[`
  .thumbnail { min-height: 210px; }
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb; }
  .green { color: #003300 !important; }
  .bold { font-weight: bold; }
  `],
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>Date: {{event.date}}</div>
  <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
   Time: {{event.time}}
   <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
   <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
   <span *ngSwitchDefault>(Normal Start)</span>
  </div>
  <div>Price: \${{event.price}}</div>
   <div [hidden]="!event?.location">
   <span>Address: {{event.location.address}}</span>&nbsp;
   <span class="pad-left">City: {{event.location.city}}</span>&nbsp;
   <span>Country: {{event.location.country}}</span>
   </div>
   <div *ngIf="event?.onlineUrl">
    <span>Online url: {{event.onlineUrl }}</span>
   </div>

  <!-- <button class="btn btn-primary" (click)="handleClick($event)">Click me</button> -->`
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

  getStartTimeClass() {
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return { green: isEarlyStart, bold: isEarlyStart };
    if ( this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

}
