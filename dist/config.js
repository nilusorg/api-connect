"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var urls = {};

var getUrl = exports.getUrl = function getUrl(url) {
  if (!urls.hasOwnProperty(url)) {
    throw Error("You need to define a url for " + url + " before calling it.");
  }

  return urls[url];
};

var apiConnectConfig = exports.apiConnectConfig = function apiConnectConfig(_urls) {
  var api = _urls.api,
      marketplace = _urls.marketplace;


  urls = _urls;

  return {
    api: api,
    marketplace: marketplace
  };
};