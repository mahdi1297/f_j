import React from "react";
import { Accordion, Card, Col } from "react-bootstrap";
import { ArrowDown } from "react-feather";
import { CardBody, CardHeader } from "reactstrap";

const AccordianContainer = ({ title, children }) => {
  return (
    <Col xl="12" className="p-0">
      <Accordion defaultActiveKey="0">
        <div className="default-according" id="accordion">
          <Card>
            <CardHeader>
              <h5 className="mb-0 p-0">
                <Accordion.Toggle
                  as={Card.Header}
                  className="btn btn-link p-0 w-100"
                  color="default"
                  eventKey="0"
                >
                  <div className="d-flex justify-content-between">
                    <div>{title}</div>
                    <div>
                      <ArrowDown size={16} />
                    </div>
                  </div>
                </Accordion.Toggle>
              </h5>
            </CardHeader>
            <Accordion.Collapse eventKey="0">
              <CardBody className="p-3">{children}</CardBody>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </Col>
  );
};

export default AccordianContainer;
