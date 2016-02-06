var weather = require('./weather.js');
var location = require('./location');
var argv = require('yargs').
          option('location', {
            alias : 'l',
            demand: false,
            description: 'Location to fetch weather for..',
            type: 'string'
          }).help('help').
          argv;

if(typeof argv.l === 'string' && argv.l.length >0){
  console.log('Location provided..');
  weather(argv.l, function (currentWeather){
    console.log(currentWeather);
  });
}else{
  console.log('Finding location..');
  location(function(loc){
    if(loc){
      weather(loc.city, function (currentWeather){
        console.log(currentWeather);
      })
    }else{
      console.log('Unable to fetch location informaation');
    }
  })
}
