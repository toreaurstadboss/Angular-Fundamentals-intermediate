import { NgComponentOutlet } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { IUser } from './user.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [ `
   em { float: right; color: #E05C65; padding-left: 10px; }
  `
  ]

})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.userName = '';
    this.password = '';
  }
  userName: string;
  password: string;
  mouseoverlogin: boolean;

  constructor(@Inject(AuthService) private authService: AuthService, @Inject(Router) private router: Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
