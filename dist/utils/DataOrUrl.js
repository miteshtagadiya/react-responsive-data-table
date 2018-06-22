"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (PureComponent, HOCComponent) {
  return function (props) {
    return props.url ? _react2.default.createElement(HOCComponent, props) : _react2.default.createElement(PureComponent, _extends({}, props, {
      loading: false,
      success: !!props.data,
      error: !props.data,
      response: true
    }));
  };
};