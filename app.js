var weather = require('./weather.js');
var location = require('./location');

weather(function(currentWeather){
  console.log(currentWeather);
});

location(function(location){
  console.log("City is: "+ location.city);
  console.log("long/lat is :" + location.loc);
})
