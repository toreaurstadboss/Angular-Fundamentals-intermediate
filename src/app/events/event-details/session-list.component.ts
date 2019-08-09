import { Component, Input } from '@angular/core';
import { ISession } from "src/app/events";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent {
  @Input() sessions: ISession[]; //importing ISession here

}
