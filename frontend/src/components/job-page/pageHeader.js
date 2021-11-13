import React from "react";
import { Col, Row } from "reactstrap";
import ImageContainer from "../../shared/image";

const PageHeader = ({
  componymainimage,
  componyprofile,
  title,
  componyname,
}) => {
  return (
    <>
      <Row>
        <Col>
          {componymainimage && (
            <ImageContainer
              src={componymainimage}
              alt=""
              width="100%"
              height="200px"
              radiusClass="b-r-10"
            />
          )}
          {componyprofile && (
            <img
              src={componyprofile}
              alt="x"
              width="120"
              className="small-image"
            />
          )}
          <h1 className="h1__componyname">کارانس ایرانیان</h1>
        </Col>
      </Row>
    </>
  );
};

export default PageHeader;
