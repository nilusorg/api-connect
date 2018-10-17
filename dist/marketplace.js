'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.patch = exports.post = exports.put = exports.get = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _axios = require('./services/axios');

var _config = require('./config');

var url = (0, _config.getUrl)('marketplace');

var _axiosConstructor = (0, _axios.axiosConstructor)(url),
    _axiosConstructor2 = _slicedToArray(_axiosConstructor, 5);

var get = _axiosConstructor2[0],
    put = _axiosConstructor2[1],
    post = _axiosConstructor2[2],
    patch = _axiosConstructor2[3],
    del = _axiosConstructor2[4];
exports.get = get;
exports.put = put;
exports.post = post;
exports.patch = patch;
exports.del = del;