const request = require('request');

describe("VNC Backend", function() {

  beforeEach(function() {
  });

  it("GET /catalog should return 200", function(done) {
    request('https://httpbin.org/get', (error, response, body) => {
	expect(response.statusCode).toBe(200);
	done();
    });
  });
});
