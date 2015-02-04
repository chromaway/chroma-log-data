var request = require('request');

exports.url = "http://datacoll.chromapass.net/";

exports.log = function (coll, data) {
  request({method: "POST", url: exports.url + coll, json: true,
      body: data}, function () {});
}

