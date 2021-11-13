import React, { Fragment } from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Home } from "react-feather";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            {props.show && (
              <Col xs="6">
                <h3>{props.title}</h3>
              </Col>
            )}
            <Col xs={props.show ? 6 : 12}>
              <Breadcrumb>
                <BreadcrumbItem active>{props.title}</BreadcrumbItem>
                <BreadcrumbItem>{props.parent}</BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to={`/`}>
                    <Home />
                  </Link>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
