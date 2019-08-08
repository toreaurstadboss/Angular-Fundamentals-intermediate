import { Component } from '@angular/core';
import { EventService } from "./shared/event.service";
import { OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { ToastrService } from "src/app/common/toastr.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];


ngOnInit(): void {
  this.events = this.route.snapshot.data['events'];
}

constructor (@Inject(EventService)private eventService: EventService, @Inject(ActivatedRoute) private route: ActivatedRoute,
 @Inject(ToastrService)private toastrService: ToastrService, @Inject(Router) private router: Router) {

  }

  handleThumbnailClick(event): void {
    this.toastrService.success(event.name);
    //debugger
    this.router.navigate(['events', event.id]);
  }

  handleEventClicked(data) {
    console.log('received: ' + data);
  }



}
