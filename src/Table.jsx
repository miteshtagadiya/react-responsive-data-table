import React, { Component } from "react";
import "./Table.css";
import fetchHOC from "fetch-hoc";
import DataOrUrl from "./utils/DataOrUrl";
import isNumber from "is-number";
import sort from "../assets/images/sort.svg";
import ContentLoader from "react-content-loader";

const isValidDate = require("is-valid-date");

const MyLoader = () => (
  <ContentLoader
    height={50}
    width={1500}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#d6d2d2"
  >
    <rect x="-5.38" y="20.13" rx="0" ry="0" width="100" height="2.24" />
  </ContentLoader>
);

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: this.props.head,
      data: this.props.data,
      isLoading: true,
      i: 1
    };
  }

  renderData(items) {
    return items.map((row, index) => {
      return (
        <tr
          onClick={() => this.props.onRowClick(row)}
          className={this.props.trClassName}
          key={index}
        >
          {row.map((data, index) => (
            <td key={index}>{data}</td>
          ))}
        </tr>
      );
    });
  }

  sortData(head, index) {
    let array = [];
    this.props.allData.map(d => {
      array.push(Object.values(d));
    });

    let sortedData = array.sort((a, b) => {
      // If number
      let c = isNumber(a[index]) ? parseInt(a[index], array.length) : a[index];
      let d = isNumber(b[index]) ? parseInt(b[index], array.length) : b[index];
      // If date
      c = isValidDate(a[index]) ? new Date(a[index]) : c;
      d = isValidDate(b[index]) ? new Date(b[index]) : d;
      if (this.state.i === 0) return c < d ? -1 : 1;
      else {
        return c > d ? -1 : 1;
      }
    });
    
    this.setState({
      data: sortedData,
      i: this.state.i === 0 ? 1 : 0
    });
    return this.props.sortedData(sortedData)
  }

  render() {
    const { isLoading, success } = this.props;

    if (!isLoading && success) {
      const { data } = this.props;
      return (
        <div className="table-responsive bg-white" style={{ marginTop: 5 }}>
          {/* <Link to="customers/1"> */}
          {this.props.data === undefined ? (
            this.props.errormsg
          ) : (
            <table
              data-resizable="true"
              className={
                this.props.tableStyle
                  ? this.props.tableStyle
                  : "display nowrap table table-hover table-striped table-bordered"
              }
              cellSpacing="0"
              width="100%"
              style={{ tableLayout: "fixed", zIndex: 0 }}
            >
              <thead>
                <tr>
                  {Object.values(this.props.head).map((h, index) => (
                    <th key={h}>
                      {h}
                      {this.props.sort ? (
                        <img
                          alt=""
                          src={sort}
                          height={20}
                          onClick={() => {
                            this.sortData(h, index);
                          }}
                          style={{ float: "right", marginTop: "7px" }}
                        />
                      ) : (
                        ""
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="sort">{this.renderData(data)}</tbody>
            </table>
          )}

          {/* </Link> */}
        </div>
      );
    } else {
      return (
        <div
          className="table-responsive m-t-40 bg-white"
          style={{ justifyContent: "center", display: "flex", minHeight: 100 }}
        >
          {this.props.loadingmsg}
        </div>
      );
    }
  }
}
Table.defaultProps = {
  onRowClick: function() {}
};
export default DataOrUrl(Table, fetchHOC(props => props.url)(Table));
