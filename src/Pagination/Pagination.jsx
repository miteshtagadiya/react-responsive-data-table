import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevLinks: true,
      endLinks: true
    };
  }

  linkClicked(page) {
    this.props.onPageLinkClick(page);
  }

  get_paging_info() {
    // let pages = Math.ceil(this.props.dataLength / this.props.itemsPerPage);
    let pages = this.props.totalPages;
    let data = [];
    // let pp =
    //   this.props.currentPage * this.props.itemsPerPage -
    //   this.props.itemsPerPage;

    if (this.props.currentPage >= 1 && this.props.currentPage < pages) {
      data.push(this.props.currentPage);
      data.push(this.props.currentPage + 1);
    } else if (
      this.props.currentPage >= 1 &&
      this.props.currentPage === pages
    ) {
      data.push(this.props.currentPage);
    }
    return data.map(number => {
      if (number === this.props.currentPage) {
        return (
          //   <li
          <button
            className="page-link"
            style={{ backgroundColor: "#3b53a2", color: "white" }}
            key={number}
            id={number}
            onClick={() => this.linkClicked(number)}
          >
            {number}
            {/* </li> */}
          </button>
        );
      } else {
        return (
          <button
            className="page-link"
            key={number}
            id={number}
            onClick={() => this.linkClicked(number)}
          >
            {number}
          </button>
        );
      }
    });
  }

  renderPageNumbers() {
    // let pages = Math.ceil(this.props.dataLength / this.props.itemsPerPage);
    let pages = this.props.totalPages;
    let data = [];
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

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.totalPages); i++) {
      pageNumbers.push(i);
    }

    return data.map(number => {
      if (number === this.props.currentPage) {
        return (
          <button
            className="page-link"
            style={{ backgroundColor: "#3b53a2", color: "white" }}
            key={number}
            id={number}
            onClick={() => this.linkClicked(number)}
          >
            {number}
          </button>
        );
      } else {
        return (
          <button
            className="page-link"
            key={number}
            id={number}
            onClick={() => this.linkClicked(number)}
          >
            {number}
          </button>
        );
      }
    });
  }

  render() {
    let { currentPage } = this.props;
    let totalPages = Math.ceil(this.props.totalPages);
    let prevLinks = (currentPage === 1 && totalPages !== 1) || totalPages === 1;
    let endLinks =
      (currentPage === totalPages && totalPages !== 1) || totalPages === 1;
    if (totalPages === 0) {
      return (
       ""
      );
    } else {
      return (
        <div className="react-bs-table-pagination" style={{ marginTop: 10 }}>
          {/*<div className="row" style={{marginTop: 15}}><div className="col-md-6 col-xs-6 col-sm-6 col-lg-6"></div>
                    <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6" style={{display: "block"}}>*/}
          {/*<ul className="pagination pagination-circle pg-purple mb-0" >*/}
          <div>
            <center>
              <div className="row">
                <div className="col-sm-10">
                  <div className="pagination pagination-circle pg-purple mb-0">
                    {/*style={{marginLeft: "57%"}}*/
                    !prevLinks
                      ? [
                          <button
                            key={"first"}
                            className="page-link"
                            onClick={() => this.linkClicked(1)}
                          >
                            First
                          </button>,
                          <button
                            key={"prev"}
                            className="page-link "
                            onClick={() =>
                              this.linkClicked(this.props.currentPage - 1)
                            }
                          >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                          </button>
                        ]
                      : null}

                    {this.renderPageNumbers()}
                    {/* {this.get_paging_info()} */}

                    {!endLinks
                      ? [
                          <button
                            key={"next"}
                            className="page-link"
                            onClick={() =>
                              this.linkClicked(this.props.currentPage + 1)
                            }
                          >
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                          </button>,
                          <button
                            key={"last"}
                            className="page-link"
                            onClick={() => this.linkClicked(totalPages)}
                          >
                            Last
                          </button>
                        ]
                      : null}
                  </div>
                </div>
              </div>
            </center>
          </div>
          {/*</div>
                </div>*/}
        </div>
      );
    }
  }
}

export default Pagination;
