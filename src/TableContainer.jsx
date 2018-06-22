import React, { Component } from "react";
import Table from "./Table";
import _ from "lodash";
import Pagination from "./Pagination/Pagination";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./TableContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global-styles.css";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.data,
      data1: this.props.data.data,
      head: this.props.data.head,
      currentPage: 1,
      itemsPerPage: this.props.size,
      totalPages: 0,
      numberofPages: 0,
      value: "",
      pagedata: _.chunk(this.props.data.data, this.props.size)
    };
  }

  componentDidMount() {
    this.setState({
      totalPages: Math.ceil(this.state.data.length / this.state.itemsPerPage),
      data: this.state.pagedata[this.state.currentPage - 1]
    });
  }

  handleChange(event) {
    this.setState({ value: event.value });
  }
  handlePage(e) {
    console.log(e);
    this.state.totalPages < e.value
      ? this.setState({
          itemsPerPage: e.value,
          totalPages: Math.ceil(this.state.data1.length / e.value)
        })
      : this.setState({
          itemsPerPage: e.value,
          totalPages: Math.ceil(this.state.data1.length / e.value),
          currentPage: 1
        });
  }
  componentDidUpdate(nextProps, nextState) {
    console.log();
    if (this.state.data !== nextState.data) {
      this.setState({
        data: nextState.pagedata[nextState.currentPage - 1]
      });
    }
  }
  //for filter data
  filter(e) {
    this.setState({ filter: e.target.value });
  }
  render() {
    // console.log("render", this.state.itemsPerPage);
    // console.log("data", this.state.data);
    let tbData = this.state.data1;
    tbData = tbData.map(data => {
      let date = new Date(data.created_at);
      let dt = date.getDate();
      let month = date.getMonth() + 1;
      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }
      let date_Data = date.getFullYear() + "-" + month + "-" + dt;
      // console.log(date_Data);
      data.created_at = date_Data;
      return Object.values(data);
    });
    let tbdata2 = _.chunk(tbData, this.state.itemsPerPage);
    let items = tbdata2[this.state.currentPage - 1];
    console.log(items);

    let keys = this.state.value;
    //filter items
    if (this.state.filter) {
      items = items.filter(item => {
        let searchTerms = keys === "" ? item : item[keys];
        return searchTerms
          .toString()
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
      });
    }
    return (
      <div className="container">
        <div
          className="card"
          style={{ marginBottom: 15, marginTop: 20, padding: 10 }}
        >
          <div
            className="card-header"
            style={
              this.props.style
                ? this.props.style
                : {
                    opacity: 0.8,
                    backgroundColor: "blue",
                    color: "#ffffff",
                    textAlign: "center"
                  }
            }
          >
            {this.props.title}
          </div>
          <div className="card-body">
            <div className="react-bs-table-container">
              <React.Fragment>
                <div className="react-bs-table-tool-bar">
                  {this.props.search === true ? (
                    <div className="row">
                      <div
                        className="col-4"
                        style={{ paddingRight: 0, zIndex: 1 }}
                      >
                        <Select
                          style={{
                            paddingBottom: 6,
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 0,
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 0
                          }}
                          name="Filter By"
                          placeholder="Filter By"
                          value={this.state.value}
                          onChange={this.handleChange.bind(this)}
                          clearable={false}
                          options={[
                            { value: "", label: "All" },
                            ...Object.values(this.state.head).map(
                              (data, index) => ({
                                value: index,
                                label: data
                              })
                            )
                          ]}
                        />
                      </div>

                      <div className="col-8" style={{ paddingLeft: 0 }}>
                        <input
                          className="form-control my-0 grey-border"
                          style={{
                            paddingBottom: 4,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 4,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 4
                          }}
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                          onChange={this.filter.bind(this)}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
                <Table
                  data={items}
                  head={this.state.head}
                  onRowClick={this.props.onRowClick}
                  loading="false"
                />

                <div className="row">
                  <div className="col-sm-4">
                    {this.props.pagination === true ? (
                      <Pagination
                        totalPages={
                          //this.state.filter ? searchpage : this.state.totalPages
                          this.state.totalPages
                        }
                        currentPage={
                          //this.state.filter ? "1" : this.state.currentPage
                          this.state.currentPage
                        }
                        onPageLinkClick={page =>
                          this.setState({ currentPage: page })
                        }
                      />
                    ) : null}
                  </div>
                  <div className="col-sm-4">
                    {this.props.pages === true ? (
                      <Select
                        className="selectouter"
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          paddingBottom: 6,
                          borderBottomLeftRadius: 4,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 4,
                          borderTopRightRadius: 0,
                          marginTop: 10
                        }}
                        name="Filter By"
                        placeholder="Filter By"
                        value={this.state.itemsPerPage}
                        onChange={this.handlePage.bind(this)}
                        clearable={false}
                        options={[
                          { value: 5, label: "5 rows" },
                          { value: 10, label: "10 rows" },
                          { value: 20, label: "20 rows" },
                          { value: 25, label: "25 rows" },
                          { value: 50, label: "50 rows" },
                          { value: 100, label: "100 rows" }
                        ]}
                      />
                    ) : null}
                  </div>
                  <div className="col-sm-4">
                    {this.props.page === true ? (
                      <div style={{ float: "right", marginTop: 15 }}>
                        Page{" "}
                        {this.state.totalPages ? this.state.currentPage : 0} of{" "}
                        {this.state.totalPages ? this.state.totalPages : 0}
                      </div>
                    ) : null}
                  </div>
                </div>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    );
    // console.log(this.state.value);
  }
}

export default TableContainer;
