'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axiosConstructor = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var METHODS = ['get', 'put', 'post', 'patch', 'delete'];

var handleUnauthorized = function handleUnauthorized(response) {
  if (response.status === 401 || response.message === 'Not Authorized') {
    localStorage.clear();
    return window.location = '/login';
  }

  return response;
};

var axios = function axios(method, path, data, responseType, url) {
  var TOKEN = localStorage.getItem('token');
  return _axios2.default.create({
    baseURL: url + '/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + TOKEN
    }
  }).request({
    responseType: responseType || 'json',
    transformResponse: function transformResponse(data) {
      if (responseType === 'arraybuffer') return data;

      return handleUnauthorized(data);
    },
    url: path,
    method: method,
    data: data
  });
};

var axiosConstructor = exports.axiosConstructor = function axiosConstructor(url) {
  return METHODS.map(function (method) {
    return function (path, data, responseType) {
      return axios(method, path, data, responseType, url).then(function (res) {
        return { res: _extends({}, res.data, res) };
      }).catch(function (error) {
        return { error: error.response, status: error.status };
      });
    };
  });
};