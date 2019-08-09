import { Component, Input } from '@angular/core';
import { ISession } from "src/app/events";
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Inject } from "@angular/core";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[]; //importing ISession here

  @Input() sortBy: string

  @Input() filterBy: string;

  construct(@Inject(ChangeDetectorRef) private cd  : ChangeDetectorRef ) {

  }

  visibleSessions: ISession[] = [];

  sortInvoke() {
    this.cd.detecChanges();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      //debugger
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotersDesc);
    }
  }

  filterSessions (filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }

  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {

  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotersDesc(s1: ISession, s2: ISession) {

  return s2.voters.length -  s1.voters.length;
}
