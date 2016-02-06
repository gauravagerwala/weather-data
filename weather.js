var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Vellore&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

module.exports = function(callback){
  request({
      url: url,
     json: true
   }, function (error, response, body){
        if(error){
          callback('Unable to fetch data');
        }else{
          // console.log(JSON.stringify(body,null,4));
          callback('It\'s ' + body.main.temp + ' in ' + body.name+'!');
        }
   });
}
