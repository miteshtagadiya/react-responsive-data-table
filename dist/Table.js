"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./Table.css");

var _fetchHoc = require("fetch-hoc");

var _fetchHoc2 = _interopRequireDefault(_fetchHoc);

var _DataOrUrl = require("./utils/DataOrUrl");

var _DataOrUrl2 = _interopRequireDefault(_DataOrUrl);

var _isNumber = require("is-number");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _sort = require("../assets/images/sort.svg");

var _sort2 = _interopRequireDefault(_sort);

var _reactContentLoader = require("react-content-loader");

var _reactContentLoader2 = _interopRequireDefault(_reactContentLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isValidDate = require("is-valid-date");

var MyLoader = function MyLoader() {
  return _react2.default.createElement(
    _reactContentLoader2.default,
    {
      height: 50,
      width: 1500,
      speed: 1,
      primaryColor: "#f3f3f3",
      secondaryColor: "#d6d2d2"
    },
    _react2.default.createElement("rect", { x: "-5.38", y: "20.13", rx: "0", ry: "0", width: "100", height: "2.24" })
  );
};

var Table = exports.Table = function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      head: _this.props.head,
      data: _this.props.data,
      isLoading: true,
      i: 1
    };
    return _this;
  }

  _createClass(Table, [{
    key: "renderData",
    value: function renderData(items) {
      var _this2 = this;

      return items.map(function (row, index) {
        return _react2.default.createElement(
          "tr",
          {
            onClick: function onClick() {
              return _this2.props.onRowClick(row);
            },
            className: _this2.props.trClassName,
            key: index
          },
          row.map(function (data, index) {
            return _react2.default.createElement(
              "td",
              { key: index },
              data
            );
          })
        );
      });
    }
  }, {
    key: "sortData",
    value: function sortData(head, index) {
      var _this3 = this;

      var sortedData = this.props.data.sort(function (a, b) {
        // If number
        var c = (0, _isNumber2.default)(a[index]) ? parseInt(a[index], 10) : a[index];
        var d = (0, _isNumber2.default)(b[index]) ? parseInt(b[index], 10) : b[index];
        // If date
        c = isValidDate(a[index]) ? new Date(a[index]) : c;
        d = isValidDate(b[index]) ? new Date(b[index]) : d;
        if (_this3.state.i === 0) return c < d ? -1 : 1;else {
          return c > d ? -1 : 1;
        }
      });

      this.setState({
        data: sortedData,
        i: this.state.i === 0 ? 1 : 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          isLoading = _props.isLoading,
          success = _props.success;


      if (!isLoading && success) {
        var data = this.props.data;

        return _react2.default.createElement(
          "div",
          { className: "table-responsive bg-white", style: { marginTop: 5 } },
          this.props.data === undefined ? this.props.errormsg : _react2.default.createElement(
            "table",
            {
              "data-resizable": "true",
              className: this.props.tableStyle ? this.props.tableStyle : "display nowrap table table-hover table-striped table-bordered",
              cellSpacing: "0",
              width: "100%",
              style: { tableLayout: "fixed", zIndex: 0 }
            },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                Object.values(this.props.head).map(function (h, index) {
                  return _react2.default.createElement(
                    "th",
                    { key: h },
                    h,
                    _this4.props.sort ? _react2.default.createElement("img", {
                      alt: "",
                      src: _sort2.default,
                      height: 20,
                      onClick: function onClick() {
                        return _this4.sortData(h, index);
                      },
                      style: { float: "right", marginTop: "7px" }
                    }) : ""
                  );
                })
              )
            ),
            _react2.default.createElement(
              "tbody",
              { className: "sort" },
              this.renderData(data)
            )
          )
        );
      } else {
        return _react2.default.createElement(
          "div",
          {
            className: "table-responsive m-t-40 bg-white",
            style: { justifyContent: "center", display: "flex", minHeight: 100 }
          },
          this.props.loadingmsg
        );
      }
    }
  }]);

  return Table;
}(_react.Component);

Table.defaultProps = {
  onRowClick: function onRowClick() {}
};
exports.default = (0, _DataOrUrl2.default)(Table, (0, _fetchHoc2.default)(function (props) {
  return props.url;
})(Table));