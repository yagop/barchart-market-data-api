'use strict';

var MarketData = require('../');
var should = require('should');

var APIKEY = process.env.APIKEY;

if (!APIKEY) {
  throw new Error('APIKEY not provided');
}

describe('MarketData', function () {
  describe('#getHistory', function () {
    it('should return an Array of data', function (done) {
      var md = new MarketData(APIKEY);
      md.getHistory('IBM').then(function (history) {
        history.should.be.instanceof(Array);
        done();
      });
    });
  });
  describe('#getQuote', function () {
    it('should return an Array of data', function (done) {
      var md = new MarketData(APIKEY);
      md.getQuote('IBM').then(function (quotes) {
        quotes.should.be.instanceof(Array);
        done();
      });
    });
  });
});
