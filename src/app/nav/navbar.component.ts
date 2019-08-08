import { Component, Inject } from '@angular/core';
import { AuthService } from '../user/auth.service';
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

  constructor(@Inject(AuthService) private auth: AuthService) {
  }

  isLoggIn(){
    return this.auth.isAuthenticated();
  }



}
