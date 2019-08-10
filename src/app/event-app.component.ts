import { Component, Inject, OnInit } from '@angular/core';
import { SWITCH_IVY_ENABLED__POST_R3__ } from '@angular/core/src/ivy_switch';
import { SWITCH_COMPILE_DIRECTIVE__POST_R3__ } from '@angular/core/src/metadata/directives';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-event-root',
  template: `
  <nav-bar></nav-bar>
  <div id='toast'></div>
 <router-outlet></router-outlet>
 <br />
 <!--<img src=\'assets/images/basic-shield.png\' /> -->`,
  styleUrls: ['./event-app.component.css']
})
export class EventAppComponent implements OnInit {

  ngOnInit(): void {
    this.auth.checkAuthenticationSatus();

  }
  constructor(@Inject(AuthService) private auth: AuthService) {

  }


}
