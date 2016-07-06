var jsdom = require('jsdom');


getOdds = function () {
  jsdom.env({
    url: "https://www.betfair.com/exchange/football",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (err, window) {
      var $ = window.$;
      $('.coupon-container ul').each(function() {
        $(this).children('li.market').each(function () {
          var eventId = $(this).data('eventid');
          var homeTeam = $(this).find('.home-team').text();
          var awayTeam = $(this).find('.away-team').text();
          var homeBackOdds = parseFloat($(this).find('.selection-0.back-cell .price').text());
          var homeLayOdds = parseFloat($(this).find('.selection-0.lay-cell .price').text());
          var drawBackOdds = parseFloat($(this).find('.selection-2.back-cell .price').text());
          var drawLayOdds = parseFloat($(this).find('.selection-2.lay-cell .price').text());
          var awayBackOdds = parseFloat($(this).find('.selection-1.back-cell .price').text());
          var awayLayOdds = parseFloat($(this).find('.selection-1.lay-cell .price').text());

          console.log('----------');
          console.log('[' + eventId + '] ' + homeTeam + ' vs ' + awayTeam);
          console.log(homeTeam + ': Back: ' + homeBackOdds + ', Lay: ' + homeLayOdds);
          console.log('Draw: Back: ' + drawBackOdds + ', Lay: ' + drawLayOdds);
          console.log(awayTeam + ' vs ' + awayTeam + '(' + eventId + ')');
          console.log(awayTeam + ': Back: ' + awayBackOdds + ', Lay: ' + awayLayOdds);
        });
      });
    }
  });
};

setInterval(getOdds, 5000);
