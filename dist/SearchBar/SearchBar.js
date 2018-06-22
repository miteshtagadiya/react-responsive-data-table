"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require("react-select/dist/react-select.css");

require("bootstrap/dist/css/bootstrap.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBar = function SearchBar(props) {
  return _react2.default.createElement(
    "div",
    { className: "row" },
    _react2.default.createElement(
      "div",
      { className: "col-4", style: { paddingRight: 0, zIndex: 5 } },
      _react2.default.createElement(_reactSelect2.default, {
        style: {
          paddingBottom: 6,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 0
        },
        name: "Filter By",
        placeholder: "Filter By",
        value: props.currrentCategory,
        onChange: props.onCategoryChange,
        clearable: false,
        options: props.categories
      })
    ),
    _react2.default.createElement(
      "div",
      { className: "col-8", style: { paddingLeft: 0 } },
      _react2.default.createElement("input", {
        className: "form-control my-0 grey-border",
        style: {
          paddingBottom: 4,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 4,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 4
        },
        type: "text",
        placeholder: "Search",
        "aria-label": "Search",
        onChange: props.filterTextChange
      })
    )
  );
};
//import PropTypes from "prop-types";


SearchBar.propTypes = {};

exports.default = SearchBar;