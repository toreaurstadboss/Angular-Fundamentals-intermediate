import { Component, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  .nav.navbar-nav { font-size: 15px; }
  li > a.active { color: #F97924; }
  #searchForm { margin-right: 100px;}
  @media (max-width: 1200px) { #searchForm { display: none}}
  `
  ]
})
export class NavBarComponent {

  searchTerm = '';
  foundSessions: ISession[];


  constructor(@Inject(AuthService) public auth: AuthService,
              @Inject(EventService) private eventService: EventService) {
  }

  searchSessions(searchTerm) {
    // debugger
    this.eventService.searchSessions(searchTerm).subscribe(sessions =>
      this.foundSessions = sessions);

    console.log(this.foundSessions);
  }

  isLoggIn() {
    return this.auth.isAuthenticated();
  }



}
