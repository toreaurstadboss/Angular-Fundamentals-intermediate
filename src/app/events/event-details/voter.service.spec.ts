import { VoterService, ISession } from "src/app/events";
import { of } from "rxjs";
import { Spied } from "src/app/common/Spied";
import { HttpClient } from "@angular/common/http";

describe("VoterService", () => {
  let voterService: VoterService;
  let mockHttp: Spied<HttpClient>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj("mockHttp", ["delete", "post"]) as Spied<
      HttpClient
    >;
    voterService = new VoterService(mockHttp);
    console.log("Inside beforeEach");
  });

  describe("deleteVoter", () => {
    it("should remove the voter from the list of voters", () => {
      const session = { id: 6, name: "John", voters: ["joe", "john"] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session as ISession, "joe");
      expect(session.voters.length).toBe(1);
    });

    it("should call http.delete with the right URL", () => {
      const session = { id: 6, name: "John", voters: ["joe", "john"] };
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(3, session as ISession, "joe");
      expect(mockHttp.delete).toHaveBeenCalledWith(
        "/api/events/3/sessions/6/voters/joe",
        jasmine.any(Object)
      );
    });

    it("should call http.post with the right URL", () => {
      const session = { id: 6, name: "John", voters: ["joe", "john"] };
      mockHttp.post.and.returnValue(of(false));
      voterService.addVoter(3, session as ISession, "joe");
      expect(mockHttp.post).toHaveBeenCalledWith(
        "/api/events/3/sessions/6/voters/joe",
        jasmine.any(Object),
        jasmine.any(Object)
      );
    });
  });
});
