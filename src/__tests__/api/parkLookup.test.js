import { parkLookup } from "../../api/parkLookup";

// Reset the fetch mock before each test
beforeEach(() => {
  fetchMock.doMock();
});

test("it calls the remote service with correct URL", (done) => {
  // Mock out fetch
  fetch.mockResponse(JSON.stringify({ info: "it's a park" }));

  parkLookup("findThisPark").then((resp) => {
    expect(resp).toBe("it's a park");
    done();
  });

  expect(fetch.mock.calls[0][0]).toEqual("/park-lookup?park=findThisPark");
});

test("it throws errors with invalid responses", (done) => {
  const theError = new Error("Expected Error");
  fetch.mockReject(theError);

  parkLookup("findThisPark")
    .then(() => {
      // We shouldn't see this. Fail test
      fail("fetch not failed");
    })
    .catch((err) => {
      expect(err).toBe(theError);
      done();
    });
});
