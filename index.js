var request = require('request');

exports.url = "http://datacoll.chromapass.net/";

exports.log = function (coll, data, cb) {
  if (!cb) cb = function () {};
  request({method: "POST", url: exports.url + coll,  json:true,
    body: data}, function (err, response, body) {
      if (err) cb(err);
      else if (response.statusCode != 200) {
        cb(new Error("log satus code: " + response.statusCode));
      } else {
        cb(null, body);
      }
    });
}

