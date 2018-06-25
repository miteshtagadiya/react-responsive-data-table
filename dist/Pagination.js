"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.state = {
      prevLinks: true,
      endLinks: true
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "linkClicked",
    value: function linkClicked(page) {
      this.props.onPageLinkClick(page);
    }
  }, {
    key: "get_paging_info",
    value: function get_paging_info() {
      var _this2 = this;

      // let pages = Math.ceil(this.props.dataLength / this.props.itemsPerPage);
      var pages = this.props.totalPages;
      var data = [];
      // let pp =
      //   this.props.currentPage * this.props.itemsPerPage -
      //   this.props.itemsPerPage;

      if (this.props.currentPage >= 1 && this.props.currentPage < pages) {
        data.push(this.props.currentPage);
        data.push(this.props.currentPage + 1);
      } else if (this.props.currentPage >= 1 && this.props.currentPage === pages) {
        data.push(this.props.currentPage);
      }
      return data.map(function (number) {
        if (number === _this2.props.currentPage) {
          return (
            //   <li
            _react2.default.createElement(
              "button",
              {
                className: "page-link",
                style: { backgroundColor: "#3b53a2", color: "white" },
                key: number,
                id: number,
                onClick: function onClick() {
                  return _this2.linkClicked(number);
                }
              },
              number
            )
          );
        } else {
          return _react2.default.createElement(
            "button",
            {
              className: "page-link",
              key: number,
              id: number,
              onClick: function onClick() {
                return _this2.linkClicked(number);
              }
            },
            number
          );
        }
      });
    }
  }, {
    key: "renderPageNumbers",
    value: function renderPageNumbers() {
      var _this3 = this;

      // let pages = Math.ceil(this.props.dataLength / this.props.itemsPerPage);
      var pages = this.props.totalPages;
      var data = [];
      if (this.props.currentPage === 1 && this.props.currentPage < pages) {
        if (pages === 2) {
          data.push(this.props.currentPage);
          data.push(this.props.currentPage + 1);
        } else {
          data.push(this.props.currentPage);
          data.push(this.props.currentPage + 1);
          data.push(this.props.currentPage + 2);
        }
      } else if (this.props.currentPage > 1 && this.props.currentPage < pages) {
        data.push(this.props.currentPage - 1);
        data.push(this.props.currentPage);
        data.push(this.props.currentPage + 1);
      } else if (this.props.currentPage > 1 && this.props.currentPage === pages) {
        if (pages === 2) {
          data.push(this.props.currentPage - 1);
          data.push(this.props.currentPage);
        } else {
          data.push(this.props.currentPage - 2);
          data.push(this.props.currentPage - 1);
          data.push(this.props.currentPage);
        }
      }

      var pageNumbers = [];
      for (var i = 1; i <= Math.ceil(this.props.totalPages); i++) {
        pageNumbers.push(i);
      }

      return data.map(function (number) {
        if (number === _this3.props.currentPage) {
          return _react2.default.createElement(
            "button",
            {
              className: "page-link",
              style: { backgroundColor: "#3b53a2", color: "white" },
              key: number,
              id: number,
              onClick: function onClick() {
                return _this3.linkClicked(number);
              }
            },
            number
          );
        } else {
          return _react2.default.createElement(
            "button",
            {
              className: "page-link",
              key: number,
              id: number,
              onClick: function onClick() {
                return _this3.linkClicked(number);
              }
            },
            number
          );
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var currentPage = this.props.currentPage;

      var totalPages = Math.ceil(this.props.totalPages);
      var prevLinks = currentPage === 1 && totalPages !== 1 || totalPages === 1;
      var endLinks = currentPage === totalPages && totalPages !== 1 || totalPages === 1;
      if (totalPages === 0) {
        return "";
      } else {
        return _react2.default.createElement(
          "div",
          { className: "react-bs-table-pagination", style: { marginTop: 10 } },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "center",
              null,
              _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                  "div",
                  { className: "col-sm-10" },
                  _react2.default.createElement(
                    "div",
                    { className: "pagination pagination-circle pg-purple mb-0" },
                    /*style={{marginLeft: "57%"}}*/
                    !prevLinks ? [_react2.default.createElement(
                      "button",
                      {
                        key: "first",
                        className: "page-link",
                        onClick: function onClick() {
                          return _this4.linkClicked(1);
                        }
                      },
                      "First"
                    ), _react2.default.createElement(
                      "button",
                      {
                        key: "prev",
                        className: "page-link ",
                        onClick: function onClick() {
                          return _this4.linkClicked(_this4.props.currentPage - 1);
                        }
                      },
                      _react2.default.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xAB"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "sr-only" },
                        "Previous"
                      )
                    )] : null,
                    this.renderPageNumbers(),
                    !endLinks ? [_react2.default.createElement(
                      "button",
                      {
                        key: "next",
                        className: "page-link",
                        onClick: function onClick() {
                          return _this4.linkClicked(_this4.props.currentPage + 1);
                        }
                      },
                      _react2.default.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xBB"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "sr-only" },
                        "Next"
                      )
                    ), _react2.default.createElement(
                      "button",
                      {
                        key: "last",
                        className: "page-link",
                        onClick: function onClick() {
                          return _this4.linkClicked(totalPages);
                        }
                      },
                      "Last"
                    )] : null
                  )
                )
              )
            )
          )
        );
      }
    }
  }]);

  return Pagination;
}(_react2.default.Component);

exports.default = Pagination;