import React from "react";
import JobListResultContent from "./content";
import { Col, Container } from "reactstrap";
import { Route } from "react-router-dom";
import "./style.css";

const JobListResult = ({ classes }) => {
  return (
    <>
      <Route exact path="/jobs">
        <Container fluid={true} className="body">
          <Col xl="12">
            <h2 className="w-100 f-w-500 f-20 d-flex justify-content-center">
              یک آگهی را انتخاب کنید
            </h2>
          </Col>
        </Container>
      </Route>
      <Route exact path="/jobs/:job">
        <Container fluid={true} className="body">
          <JobListResultContent classes={classes} />
        </Container>
      </Route>
    </>
  );
};

export default JobListResult;
