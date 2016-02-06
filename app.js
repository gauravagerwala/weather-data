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
  weather(argv.l).then(function(data){
    console.log(data);
  }).catch( function(error){
    console.log(error);
  });
}else{
  console.log('Finding location..');
  location().then( function(location){
    return weather(location.city);
  }).then(function (currentWeather){
    console.log(currentWeather);
  }).catch( function (error){
    console.log(error);
  })
}
