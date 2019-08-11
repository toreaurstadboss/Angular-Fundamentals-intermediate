import { Component, Input, OnInit } from '@angular/core';
import { ISession } from 'src/app/events';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Inject } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges, OnInit {

  constructor(@Inject(AuthService) public auth: AuthService,
  @Inject(Router) private router: Router,
   @Inject(VoterService) private voterService: VoterService) {

  }

  @Input() sessions: ISession[]; //importing ISession here

  @Input() sortBy: string;

  @Input() eventId: number;

  @Input() filterBy: string;

  visibleSessions: ISession[] = [];
  ngOnInit(): void {
    if (!this.auth.currentUser){
      this.router.navigate(['/user/login']);

    }
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      // debugger
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

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }


  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session,this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    // if (this.sortBy === 'votes')
    //  this.visibleSessions.sort(thi.sortByVotesDesc);
  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {

  if (s1.name > s2.name) { return 1; }
  else if (s1.name === s2.name) { return 0; }
  else { return -1; }
}

function sortByVotersDesc(s1: ISession, s2: ISession) {

  return s2.voters.length -  s1.voters.length;
}
