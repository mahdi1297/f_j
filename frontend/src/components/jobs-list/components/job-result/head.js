import React from "react";
import ImageContainer from "../../../../shared/image";
import { Col, Row } from "reactstrap";
import "./style.css";

const JobListResultHead = () => {
  return (
    <>
      <Row>
        <Col>
          <ImageContainer
            src="https://jobinja.ir/assets/img/jobcovers/4.jpg"
            alt=""
            width="100%"
            height="200px"
            radiusClass="radius-top"
          />
          <img
            src="https://spectrum.imgix.net/communities/00625101-4273-457b-8a29-112095b41c44/logo2.png.0.622709103559038?w=256&h=256&dpr=2&auto=compress&expires=1631577600000&ixlib=js-1.3.0&s=078e78f288947226f722537986ce41aa"
            alt="x"
            width="120"
            className="small-image"
          />
        </Col>
      </Row>
    </>
  );
};

export default JobListResultHead;
