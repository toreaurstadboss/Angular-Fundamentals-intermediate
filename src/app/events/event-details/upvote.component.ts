import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ISession } from '..';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
  <div class="votingWidgetContainer pointable" (click)="onClick()">
   <div class="well votingWidget">
    <div class="votingButton">
     <i [style.color]="iconColor" class="glyphicon glyphicon-heart"></i>
     <div class="badge badge-inverse votingCount">
      <div>{{count}}</div>
     </div>
    </div>
  </div>
  `
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    if (this.iconColor === 'red') {
      this.iconColor = 'white';
    } else {
      this.iconColor = 'red';
    }
  }
  @Output() vote = new EventEmitter();
  @Input() sortBy: string;
  @Input() visibleSessions: boolean;
  iconColor: string;

  constructor(@Inject(AuthService) private auth: AuthService, @Inject(VoterService) private voterService: VoterService) {
  }

  onClick() {
    if (this.voted) {
     this.voted = undefined;
    }
    else {
     this.voted = true;
    }
    this.vote.emit('');
  }


  sortByVotesDesc() {
    return 0;
  }

}
