import { EventListResolver } from '../events/shared/events-list-resolver.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent

  ],
  providers: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule {

}
