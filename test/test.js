const should = require("should");
const request = require("request");
const expect = require("chai").expect;
var chai = require('chai')
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
const baseUrl = "http://localhost:5000";
const util = require("util");


describe('Words endpoint', function() {
  it('it responds with a 200 status code', function() {
     return chai.request(baseUrl)
    .post('/words')
     .set("Accept", "application/json")
     .send({string: '123'})
      .then(function(response) {
      expect(response.statusCode).to.equal(200)
      })
      .catch(error=>console.log(error));
    })
})



describe('Words endpoint', function() {
  it('it includes the word "HELLO" when the digits 43556 are sent', function() {
     return chai.request(baseUrl)
    .post('/words')
     .set("Accept", "application/json")
     .send({string: '43556'})
      .then(function(response) {
        expect(response.body.includes("HELLO")).to.equal(true)
      })
      .catch(error=>console.log(error));
    })
})

describe('it ignores the non alphabetical digits I.E. 1 or 0 when provided', function() {
  it('it includes "HELLO" when the digits 4315056 are sent', function() {
     return chai.request(baseUrl)
    .post('/words')
     .set("Accept", "application/json")
     .send({string: '4315056'})
      .then(function(response) {
        expect(response.body.includes("HELLO")).to.equal(true)

      })
      .catch(error=>console.log(error));
    })
})

describe('Returns only existing words', function() {
  it('it returns an empty array when the digits 444444 are sent', function() {
     return chai.request(baseUrl)
    .post('/words')
     .set("Accept", "application/json")
     .send({string: '444444'})
      .then(function(response) {
        expect(response.body).to.equal([])
      })
      .catch(error=>console.log(error));
    })
})
