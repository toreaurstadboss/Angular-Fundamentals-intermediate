import { Injectable, Inject } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  loginUser(userName: string, password: string): Observable<IUser | any> {
    const loginInfo = { username: userName, password };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json' }) };
    return this.http.post('/api/login', loginInfo, options).pipe(
      tap(data => {
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        // tslint:disable-next-line: no-string-literal
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        this.currentUser = <IUser> data['user'];
      })).pipe(
        catchError(err => {
          return of(false);
        })
      );
    // this.currentUser = {
    //   id: 1,
    //   userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // };
  }

  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated() {
   return !!this.currentUser;
  }

}


