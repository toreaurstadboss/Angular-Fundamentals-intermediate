import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
  em { float: right; color: #E05C65; padding-left: 10px; }
  .error input { background-color: #E3C3C5; }
  .error ::-webkit-input-placeholder { color: #999 };
  `
  ]
})
export class ProfileComponent implements OnInit {
  private firstName: FormControl;
  private lastName: FormControl;
  profileForm: FormGroup;
  ngOnInit(): void {
    // debugger
    if (!this.authService.currentUser) {
      this.router.navigate(['/user/login']);

    }
    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  constructor( @Inject(AuthService) private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    @Inject(Router) private router: Router) {

  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
        this.toastr.success('Success');
      });
      //this.router.navigate(['/events']);
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  validateLastName(): boolean {
    if (this.profileForm) {
      return this.lastName.valid || this.lastName.untouched;
    }
    return true;
  }

  validateFirstName(): boolean {
    if (this.profileForm) {
      return this.firstName.valid || this.firstName.untouched;
    }
    return true;
  }





}
