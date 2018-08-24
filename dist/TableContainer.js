"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Table = require("./Table");

var _Table2 = _interopRequireDefault(_Table);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _Pagination = require("./Pagination/Pagination");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require("react-select/dist/react-select.css");

require("./TableContainer.css");

require("bootstrap/dist/css/bootstrap.css");

require("../styles/global-styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableContainer = function (_Component) {
  _inherits(TableContainer, _Component);

  function TableContainer(props) {
    _classCallCheck(this, TableContainer);

    var _this = _possibleConstructorReturn(this, (TableContainer.__proto__ || Object.getPrototypeOf(TableContainer)).call(this, props));

    _this.state = {
      data: _this.props.data.data,
      data1: _this.props.data.data,
      head: _this.props.data.head,
      currentPage: 1,
      itemsPerPage: _this.props.size,
      totalPages: 0,
      numberofPages: 0,
      value: "",
      pagedata: _lodash2.default.chunk(_this.props.data.data, _this.props.size)
    };
    return _this;
  }

  _createClass(TableContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        totalPages: Math.ceil(this.state.data.length / this.state.itemsPerPage),
        data: this.state.pagedata[this.state.currentPage - 1]
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.value });
    }
  }, {
    key: "handlePage",
    value: function handlePage(e) {
      this.state.totalPages <= Math.ceil(this.state.data1.length / e.value) ? this.setState({
        itemsPerPage: e.value,
        totalPages: Math.ceil(this.state.data1.length / e.value)
      }) : this.setState({
        currentPage: 1,
        itemsPerPage: e.value,
        totalPages: Math.ceil(this.state.data1.length / e.value)
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps, nextState) {
      if (this.state.data !== nextState.data) {
        this.setState({
          data: nextState.pagedata[nextState.currentPage - 1]
        });
      }
    }

    //for filter data

  }, {
    key: "filter",
    value: function filter(e) {
      this.setState({ filter: e.target.value });
    }

    //iso 8601 to date object

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tbData = this.state.data1;
      tbData = tbData.map(function (data) {
        var time = void 0;
        data.created_at ? time = data.created_at : time = "";
        var date = new Date(time);
        var dt = date.getDate();
        var month = date.getMonth() + 1;
        if (dt < 10) {
          dt = "0" + dt;
        }
        if (month < 10) {
          month = "0" + month;
        }
        var date_Data = date.getFullYear() + "-" + month + "-" + dt;
        data.created_at ? data.created_at = date_Data : null;
        return Object.values(data);
      });
      var tbdata2 = _lodash2.default.chunk(tbData, this.state.itemsPerPage);
      var items = tbdata2[this.state.currentPage - 1];

      var keys = this.state.value;
      //filter items
      if (this.state.filter) {
        items = items.filter(function (item) {
          var searchTerms = keys === "" ? item : item[keys];
          return searchTerms.toString().toLowerCase().includes(_this2.state.filter.toLowerCase());
        });
      }
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          {
            className: "card",
            style: {
              marginBottom: 15,
              marginTop: 20,
              padding: 10,
              minWidth: 600
            }
          },
          _react2.default.createElement(
            "div",
            {
              className: "card-header",
              style: this.props.style ? this.props.style : {
                opacity: 0.8,
                backgroundColor: "blue",
                color: "#ffffff",
                textAlign: "center"
              }
            },
            this.props.title
          ),
          _react2.default.createElement(
            "div",
            { className: "card-body" },
            _react2.default.createElement(
              "div",
              { className: "react-bs-table-container" },
              _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                  "div",
                  { className: "react-bs-table-tool-bar" },
                  this.props.search === true ? _react2.default.createElement(
                    "div",
                    { className: "row" },
                    _react2.default.createElement(
                      "div",
                      {
                        className: "col-4",
                        style: { paddingRight: 0, zIndex: 1 }
                      },
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
                        value: this.state.value,
                        onChange: this.handleChange.bind(this),
                        clearable: false,
                        options: [{ value: "", label: "All" }].concat(_toConsumableArray(Object.values(this.state.head).map(function (data, index) {
                          return {
                            value: index,
                            label: data
                          };
                        })))
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
                        onChange: this.filter.bind(this)
                      })
                    )
                  ) : null
                ),
                _react2.default.createElement(_Table2.default, {
                  tableStyle: this.props.tableStyle,
                  data: items,
                  head: this.state.head,
                  onRowClick: this.props.onRowClick,
                  isLoading: this.props.isLoading,
                  loadingmsg: this.props.loadingmsg ? this.props.loadingmsg : "Loading. . .",
                  errormsg: this.props.errormsg ? this.props.errormsg : "Error. . .",
                  sort: this.props.sort
                }),
                !this.props.isLoading ? _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-sm-4" },
                    this.props.pagination === true ? _react2.default.createElement(_Pagination2.default, {
                      totalPages:
                      //this.state.filter ? searchpage : this.state.totalPages
                      this.state.totalPages,
                      currentPage:
                      //this.state.filter ? "1" : this.state.currentPage
                      this.state.currentPage,
                      onPageLinkClick: function onPageLinkClick(page) {
                        return _this2.setState({ currentPage: page });
                      }
                    }) : null
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-sm-4" },
                    this.props.pages === true ? _react2.default.createElement(_reactSelect2.default, {
                      className: "selectouter",
                      style: {
                        marginLeft: "auto",
                        marginRight: "auto",
                        paddingBottom: 6,
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 4,
                        borderTopRightRadius: 0,
                        marginTop: 10
                      },
                      name: "Filter By",
                      placeholder: "Filter By",
                      value: this.state.itemsPerPage,
                      onChange: this.handlePage.bind(this),
                      clearable: false,
                      options: [{ value: 5, label: "5 rows" }, { value: 10, label: "10 rows" }, { value: 20, label: "20 rows" }, { value: 25, label: "25 rows" }, { value: 50, label: "50 rows" }, { value: 100, label: "100 rows" }]
                    }) : null
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-sm-4" },
                    this.props.page === true ? _react2.default.createElement(
                      "div",
                      { style: { float: "right", marginTop: 15 } },
                      "Page",
                      " ",
                      this.state.totalPages ? this.state.currentPage : 0,
                      " ",
                      "of ",
                      this.state.totalPages ? this.state.totalPages : 0
                    ) : null
                  )
                ) : null
              )
            )
          )
        )
      );
    }
  }]);

  return TableContainer;
}(_react.Component);

exports.default = TableContainer;