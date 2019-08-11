import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.session';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService, mockRouter;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockRouter, mockVoterService );
  });

  describe('ngOnChanges', () => {

    it('should filter the sessions correctly', () => {
      component.sessions = [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'advanced' },
        { name: 'session 3', level: 'beginner' }
      ] as ISession[];
      component.filterBy = 'advanced';
      component.sortBy = 'name';
      component.eventId = 3;
      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(1);

    });

  });
;
});



