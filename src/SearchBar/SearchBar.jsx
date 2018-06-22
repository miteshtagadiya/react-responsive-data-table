import React from "react";
//import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";
import 'bootstrap/dist/css/bootstrap.css';


const SearchBar = props => {
  return (
    <div className="row">
      <div className="col-4" style={{ paddingRight: 0, zIndex: 5 }}>
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
          value={props.currrentCategory}
          onChange={props.onCategoryChange}
          clearable={false}
          options={props.categories}
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
          onChange={props.filterTextChange}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
