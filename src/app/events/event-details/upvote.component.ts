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
     <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
     <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
     <div class="badge badge-inverse votingCount">
      <div>{{count}}</div>
     </div>
    </div>
  </div>
  `
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();
  @Input() sortBy: string;
  @Input() visibleSessions: boolean;

  constructor(@Inject(AuthService) private auth: AuthService, @Inject(VoterService) private voterService: VoterService) {
  }

  onClick() {
    this.vote.emit('');
  }


  sortByVotesDesc() {
    return 0;
  };

}
