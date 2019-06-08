const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const expect = chai.expect;
const routes = require('./app/routing/apiRoutes.js');
const addValue = require('./app/public/app.js');

// API Endpoint Testing
// Setting up the chai http plugin. This plugin allows for HTTP integration testing with Chai assertions!
chai.use(chaiHttp);

  // set a variable for making http requests.
let request;

// Unit Tests
// Validation Test
describe('arrayTesting', function() {
  it('should return the correct sum of an array of numbers', function() {
    expect(addValue([ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ])).to.equal(32);
  });
  it('should return a negative sum given an array of negative numbers', function() {
    expect(addValue([ -4, -2, -5, -1, -3, -2, -2, -1, -3, -2 ])).to.lessThan(10);
  });
  it('should not return boolean false given a valid array of numbers', function() {
    expect(addValue([ 1, 1, 2, 1, 1, 2, 1, 1, 2, 1 ])).to.not.be.false;
  });
  it('should not return NaN given a valid array of numbers', function() {
    expect(addValue([ 3, 3, 4, 3, 3, 4, 3, 3, 4, 3 ])).to.not.be.NaN;
  });
});

// Functional Tests
describe('GET /api/employees', function () {
  
  //  clear the test db 
     beforeEach(function () {
      request = chai.request(server);
     });
  
    it('get api returns no errors', function (done) {
      request.get('/api/employees').end(function (err, res) {
          expect(err).to.be.null;
          done();
      });
    });
    it('initial get employee api should an array of 6 employees', function (done) {
      request.get('/api/employees').end(function (err, res) {
          let responseBody = res.body
          expect(responseBody)
            .to.be.an('array')
            .that.has.lengthOf(6);
            done();
      });
    });
    it('initial get employee api should not return an object', function (done) {
      request.get('/api/employees').end(function (err, res) {
          let responseBody = res.body
          expect(responseBody)
            .to.not.be.an('object')
            done();
      });
    });
    it('initial get employee api should not return a status code of 404', function (done) {
      request.get('/api/employees').end(function (err, res) {
          let responseStatus = res.status;
          expect(responseStatus).to.not.equal(404);
          done();
      });
    });
    });