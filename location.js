var request = require('request');

module.exports = function(){
    return new Promise (function(resolve, reject){
    var url = 'http://ipinfo.io';
    request({
      url: url,
      json: true
    }, function(error, response, body){
      if(error){
        reject('Unable to fetch location');
      }else{
        resolve(body);
      }
    });
  });
}
// module.exports = function (callback){
//   request({
//     url: url,
//     json: true
//   }, function (error, response, body){
//     if(error){
//       callback();
//     }else{
//       callback(body);
//     }
//   });
// };
