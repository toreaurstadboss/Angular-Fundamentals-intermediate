import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { SessionListComponent } from "./session-list.component";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.session";
import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DurationPipe } from "../shared";
import { Router } from "@angular/router";
import { UpvoteComponent } from "./upvote.component";
import { CollapsibleWellComponent } from "src/app/common";

describe("SessionListComponent", () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: "Joe" }
    };
    const mockVoterService = {
      userHasVoted: () => true
    };
    const mockRouter = {};

    TestBed.configureTestingModule({
      imports: [],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        SessionListComponent,
        CollapsibleWellComponent,
        UpvoteComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService },
        { provide: Router, useValue: mockRouter }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe("initial display", () => {
    it("should have the correct session title", () => {
      component.sessions = [
        {
          id: 3,
          name: "Session 1",
          presenter: "Joe",
          duration: 1,
          level: "intermediate",
          abstract: "abstract",
          voters: ["john", "bob"]
        }
      ];
      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();
      setTimeout(() => { console.log("Well element h3: " + element.querySelector("h3").textContent); }, 2000);

      expect(element.querySelector("h3").textContent.toLocaleLowerCase()).toContain(
        "session 1"
      );
    });
  });
});
