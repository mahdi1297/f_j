import React from "react";
import { Star } from "react-feather";
import { Col } from "reactstrap";
import ImageContainer from "../../../shared/image";

const ComponyPageHeader = ({ data }) => {
  return (
    <>
      <Col xl="12">
        <ImageContainer
          src={data.mainImage}
          width="100%"
          alt=""
          radiusClass="b-r-5"
        />
      </Col>
      <Col xl="12" className="d-flex m-t-20">
        <ImageContainer
          src={data.profileimage}
          width="80px"
          alt=""
          radiusClass="b-r-5"
        />

        <div className="d-flex flex-column compony-data-container">
          <div className="f-16 compony-name-border">{data.componyname}</div>
          <div>
            <Star size={15} color="#f6af11" />
            <Star size={15} color="#f6af11" />
            <Star size={15} color="#f6af11" />
            <Star size={15} color="#f6af11" />
            <Star size={15} color="#404040" />
          </div>
        </div>
      </Col>
    </>
  );
};

export default ComponyPageHeader;
