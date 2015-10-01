'use strict';

var aixos = require('axios');

/**
 * Creates a new client.
 * @param {String} apiKey API key provided by Barchart
 */
var MarketData = function (apiKey) {
  this.apiKey = apiKey;
  this.baseUrl = 'http://marketdata.websol.barchart.com';
};

MarketData.prototype._request = function (opts) {
  opts.url = this.baseUrl + opts.url;
  opts.params = opts.params || {};
  opts.params.key = this.apiKey;
  opts.headers = opts.headers || {};
  opts.headers['User-Agent'] = 'BarchartMarketDataAPI NodeJS Client';

  return aixos(opts).then(function (resp) {
    if (resp.data.status.code !== 200) {
      throw new Error('Error on Barchart Response');
    } else {
      return resp.data.results;
    }
  }).catch(function (resp) {
    throw new Error(resp.statusText || resp.status || 'Bad request');
  });
};

/**
 * The getHistory API is used to request historical time series data on stocks,
 * indices, mutual funds, ETFs, futures, indices or forex pairs. Historical data
 * is available as tick, minute or end-of-day data.
 * @param  {String} symbol    [description]
 * @param  {String} [type]    [description]
 * @param  {Object} [options] All additional options as key value
 * @return {Promise}
 * @see http://www.barchartondemand.com/api/getHistory
 */
MarketData.prototype.getHistory = function (symbol, type, optionalParams) {
  type = type || 'daily';
  if (!symbol) {
    throw new Error('Symbol not provided!');
  }
  var opts = {};
  opts.params = optionalParams || {};
  opts.params.symbol = symbol;
  opts.params.type = type;
  opts.url = '/getHistory.json';
  return this._request(opts);
};

/**
 * The getQuote API is used to request price data, either real-time, delayed or
 * end-of-day, by symbol. In addition to Last Price or Settlement, other fields
 * such as Open, High, Low, Close, Bid, Ask, 52-week high and low, and more are
 * available.
 * @param  {String} symbols   A symbol or code that identifies a financial
 * instrument. Multiple symbols separated by a comma may be used.
 * @param  {String} [fields]  The fields requested.
 * @param  {String} [mode]    Parameter to change quote type to real-time ("R"),
 * delayed ("I") or end-of-day ("D")
 * @see http://www.barchartondemand.com/api/getQuote
 */
MarketData.prototype.getQuote = function (symbols, fields, mode) {
  if (!symbols) {
    throw new Error('Symbols not provided!');
  }
  var opts = {
    url: '/getQuote.json',
    params: {
      symbols: symbols,
      fields:  fields,
      mode:    mode
    }
  };
  return this._request(opts);
};

module.exports = MarketData;
