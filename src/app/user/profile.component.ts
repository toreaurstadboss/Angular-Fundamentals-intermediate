import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [ `
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
    this.firstName = new FormControl(this.authService.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  constructor(@Inject(AuthService) private authService: AuthService, @Inject(Router) private router: Router) {

  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid) {
     this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
     this.router.navigate(['/events']);
    }
  }

  validateLastName(): boolean {
   return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
   }





}
