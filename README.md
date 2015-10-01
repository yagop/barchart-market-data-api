## Barchart OnDemand Free Market Data API Client

Barchart offers free Market data API on [freemarketdataapi.barchartondemand.com](http://freemarketdataapi.barchartondemand.com),
to use the API you need an API key which is provided singing up on theirs website.

This client offers access to free methods `getQuote` and `getHistory`.

### Example

```js
var MarketData = require('barchart-market-data-api');

var md = new MarketData(__YOUR_API_KEY__);
md.getHistory('IBM').then(function (history) {
  console.log('History data:', history);
});
md.getQuote('IBM').then(function (quotes) {
  console.log('Price data:', quotes);
});
```

<a name="MarketData"></a>
## MarketData(apiKey)
Creates a new client.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>String</code> | API key provided by Barchart |


* [MarketData(apiKey)](#MarketData)
  * [.getHistory(symbol, [type], [options])](#MarketData+getHistory) ⇒ <code>Promise</code>
  * [.getQuote(symbols, [fields], [mode])](#MarketData+getQuote)

<a name="MarketData+getHistory"></a>
### marketData.getHistory(symbol, [type], [options]) ⇒ <code>Promise</code>
The getHistory API is used to request historical time series data on stocks,
indices, mutual funds, ETFs, futures, indices or forex pairs. Historical data
is available as tick, minute or end-of-day data.

**Kind**: instance method of <code>[MarketData](#MarketData)</code>  
**See**: http://www.barchartondemand.com/api/getHistory  

| Param | Type | Description |
| --- | --- | --- |
| symbol | <code>String</code> | [description] |
| [type] | <code>String</code> | [description] |
| [options] | <code>Object</code> | All additional options as key value |

<a name="MarketData+getQuote"></a>
### marketData.getQuote(symbols, [fields], [mode])
The getQuote API is used to request price data, either real-time, delayed or
end-of-day, by symbol. In addition to Last Price or Settlement, other fields
such as Open, High, Low, Close, Bid, Ask, 52-week high and low, and more are
available.

**Kind**: instance method of <code>[MarketData](#MarketData)</code>  
**See**: http://www.barchartondemand.com/api/getQuote  

| Param | Type | Description |
| --- | --- | --- |
| symbols | <code>String</code> | A symbol or code that identifies a financial instrument. Multiple symbols separated by a comma may be used. |
| [fields] | <code>String</code> | The fields requested. |
| [mode] | <code>String</code> | Parameter to change quote type to real-time ("R"), delayed ("I") or end-of-day ("D") |
