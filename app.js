var weather = require('./weather');
var location = require('./location.js');
var argv = require('yargs')
  .option('location', {
    demand: false,
    alias: 'l',
    description: 'Your location',
    type: 'string'
    })
    .help('help')
    .argv;


var command = argv._[0];

if (typeof argv.l === 'string' && argv.l.length > 0) {
  weather(argv.l, function(currentWeather) {
   console.log(currentWeather);
 });
} else {
  console.log('Location was not provided')
  location(function(location) {
    if (location) {
      console.log(location.city)
      weather(location.city, function(currentWeather) {
          console.log(currentWeather);
      });
    } else {
      console.log('Unable to guess location');
    }
  })
}
