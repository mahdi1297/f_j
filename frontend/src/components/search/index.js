import React from "react";
import { Button, Col } from "reactstrap";
import "./style.css";

const Search = () => {
  return (
    <div className="search-content m-b-50">
      <div className="d-flex align-items-center justofy-content-center search-container">
        <Col xl="5" className="p-0">
          <div className="search-wrapper">
            <i className="icofont icofont-location-pin"></i>
            <input placeholder="قم" />
          </div>
          <div className="search-dropdown d-none"></div>
        </Col>
        <Col xl="5" className="p-0">
          <div className="search-wrapper search-wrapper-first">
            <i className="icofont icofont-search"></i>
            <input placeholder="web developer" />
          </div>
          <div className="search-dropdown d-none"></div>
        </Col>
        <Col xl="2" className="p-0">
          <Button className="btn-square" color="primary">
            جست وجو
          </Button>
        </Col>
      </div>
    </div>
  );
};

export default Search;
