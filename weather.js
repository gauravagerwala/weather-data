var request = require('request');

module.exports = function(location){
    return new Promise( function(resolve, reject) {

      var encodedLocation = encodeURIComponent(location);
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
      url = url + encodedLocation + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

      if(!location){
        reject('No location provided');
      }
      request({
          url: url,
         json: true
       }, function (error, response, body){
            if(error){
              reject('Unable to fetch data');
            }else{
            }
              resolve('It\'s ' + body.main.temp + ' in ' +body.name);
       });
    });
}

// module.exports = function(location, callback){
//   var encodedLocation = encodeURIComponent(location);
//   var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
//   url = url + encodedLocation + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';
//
//   if(!location){
//     callback('No location provided');
//   }
//   request({
//       url: url,
//      json: true
//    }, function (error, response, body){
//         if(error){
//           callback('Unable to fetch data');
//         }else{
//           // console.log(JSON.stringify(body,null,4));
//           callback('It\'s ' + body.main.temp + ' in ' + body.name+'!');
//         }
//    });
// }
