var request = require('request');
var degSym = '\xB0';

module.exports = function(location, callback) {
  var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

  if (!location) {
    return callback('Location not found');
  }

  request({
    url:url,
    json:true
  }, function(error, response, body) {
      if (error) {
        callback('There was an error');
      } else {
        callback('The current temperature in ' + body.name + ' is ' + Math.round(body.main.temp) + degSym);
      }
  });
}
