import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEvent } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISession } from '.';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  searchSessions(searchTerm: string) {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm).pipe(
      catchError(this.handleError<ISession[]>()));
  }

    // tslint:disable-next-line: prefer-const
    // let results: ISession[] = [];
    // EVENTS.forEach(event => {
    //   const matchingSessions = event.sessions.filter(
    //     session => session.name.toLocaleLowerCase().indexOf(term) > -1
    //   );
    //   matchingSessions.map((session: any) => {
    //     session.eventid = event.id;
    //     return session;
    //   });
    //   results = results.concat(matchingSessions);
    // });
    // return of(results);
  // }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events').pipe(
      catchError(this.handleError<IEvent[]>([]))
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  saveEvent(event): Observable<IEvent> {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post<IEvent>('/api/events', event, options).pipe(
      catchError(this.handleError<IEvent>())
    );
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id).pipe(
      catchError(this.handleError<IEvent>())
    );
  }
}
