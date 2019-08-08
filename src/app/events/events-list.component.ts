import { Component } from '@angular/core';
import { EventService } from "./shared/event.service";
import { OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { ToastrService } from "src/app/common/toastr.service";

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];


ngOnInit(): void {
  this.events = this.eventService.getEvents();
}

constructor (@Inject(EventService)private eventService: EventService, @Inject(ToastrService)private toastrService: ToastrService){

  }

  handleThumbnailClick(eventName): void {
    this.toastrService.success(eventName);
  }

  handleEventClicked(data) {
    console.log('received: ' + data);
  }



}
