// import { Injectable } from "@angular/core";
// import { CanActivate } from "@angular/router";
// import { ActivatedRouteSnapshot } from "@angular/router";
// import { RouterStateSnapshot } from "@angular/router";
// import { EventService } from "src/app/events/shared/event.service";
// import { Inject } from "@angular/core";
// import { Router } from "@angular/router";

// @Injectable()
// export class EventRouteActivator implements CanActivate {

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const eventExists = !!this.eventService.getEvent(+route.params['id']);
//     if (!eventExists) {
//       this.router.navigate(['/404']);
//       return false;
//     }
//     return true;
//   }

//   constructor(@Inject(EventService) private eventService: EventService, @Inject(Router) private router: Router) {

//   }

// }
