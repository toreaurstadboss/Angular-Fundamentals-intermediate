import { VoterService, ISession } from "src/app/events";
import { of } from "rxjs";
import { Spied } from "src/app/common/Spied";
import { HttpClient } from "@angular/common/http";

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp: Spied<HttpClient>;

  beforeEach(() => {
    mockHttp = <Spied<HttpClient>>jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
    console.log('Inside beforeEach');
  });

  describe('deleteVoter', () => {

    it('should remove the voter from the list of voters', () => {
      var session = { id: 6, name: "John", voters: ["joe", "john"] };
      mockHttp.delete.and.returnValue(of(false));
      console.log(voterService);

      voterService.deleteVoter(3, <ISession>session, "joe");
      expect(session.voters.length).toBe(1);
    });

  });

});

