"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AjaxCall = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AjaxCall = function AjaxCall(_ref) {
  var method = _ref.method,
      url = _ref.url,
      data = _ref.data,
      headers = _ref.headers;
  var baseUrl = "https://ryt-service.ir/api/v1/";
  return _axios["default"].request({
    method: method,
    url: baseUrl + url,
    data: data,
    headers: headers
  });
};

exports.AjaxCall = AjaxCall;