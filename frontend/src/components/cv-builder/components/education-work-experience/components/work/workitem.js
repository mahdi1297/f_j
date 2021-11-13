import React from "react";
import { Col, Row } from "reactstrap";

const WorkityItem = ({ workItem }) => {
  return (
    <>
      {workItem &&
        workItem.map((x) => (
          <Row className="m-0 m-t-20" key={x._id}>
            <Col lg="12" className="d-flex align-items-center">
              <div>
                <i className="icofont icofont-university f-50"></i>
              </div>
              <div className="p-t-3">
                <Col xl="12">
                  <span>{x.componyname}</span>
                </Col>
                <Col xl="12">
                  <span>{x.role}</span>
                  <br />
                  <span>{`سال ${x.experience_time} `}</span>
                </Col>
              </div>
            </Col>
          </Row>
        ))}
    </>
  );
};

export default WorkityItem;
