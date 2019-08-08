import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'John',
      lastName: 'Papa'
    };
  }

  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated() {
   return !!this.currentUser;
  }

}


