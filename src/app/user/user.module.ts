import { EventListResolver } from '../events/shared/events-list-resolver.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProfileComponent

  ],
  providers: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule {

}
