import React from "react";
import { Col, Row } from "reactstrap";

const UniversityItem = ({ educatedItem }) => {
  return (
    <>
      {educatedItem &&
        educatedItem.map((x) => (
          <Row className="m-0 m-t-20" key={x._id}>
            <Col lg="12" className="d-flex align-items-center">
              <div>
                <i className="icofont icofont-university f-50"></i>
              </div>
              <div className="p-t-3">
                <Col xl="12">
                  <span>{x.university}</span>
                </Col>
                <Col xl="12">
                  <span>
                    {x.education_feild} {"-"}
                    {x.education_level}
                  </span>
                </Col>
              </div>
            </Col>
          </Row>
        ))}
    </>
  );
};

export default UniversityItem;
