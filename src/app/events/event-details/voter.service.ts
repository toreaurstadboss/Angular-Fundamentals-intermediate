import { Injectable, Inject } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {
  constructor(@Inject(HttpClient) private http: HttpClient) {


  }
  deleteVoter(eventId: number, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
    const options = { headers: new HttpHeaders({ 'Content-type': '/application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url, {}, options).pipe(catchError(this.handleError('addVoter')))
    .subscribe();
  }

  addVoter(eventId: number, session: ISession, voterName: string) {
    session.voters.push(voterName);
    const options = { headers: new HttpHeaders({ 'Content-type': '/application/json'})};
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter')))
    .subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voterName === voter);
  }

  handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
