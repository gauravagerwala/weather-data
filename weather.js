var request = require('request');

module.exports = function(location){
    return new Promise( function(resolve, reject) {

      var encodedLocation = encodeURIComponent(location);
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
      url = url + encodedLocation + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

      if(!(location.city)){
        reject('Could not find location');
      }
      request({
          url: url,
         json: true
       }, function (error, response, body){
            if(error){
              reject('Unable to fetch data');
            }else{
            }
              resolve(body);
       });
    });
}
