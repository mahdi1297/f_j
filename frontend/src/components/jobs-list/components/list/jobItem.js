import React from "react";
import ImageContainer from "../../../../shared/image";
import { Col, Row } from "reactstrap";
import { Heart, Maximize2 } from "react-feather";
import { Link } from "react-router-dom";

const ListJobItem = ({ jobs, width }) => {
  return (
    <>
      {jobs.map((job, i) => (
        <li className="p-2" key={i}>
          <Row className="p-0 m-0">
            <Col
              xl="11"
              xs="11"
              sm="11"
              className="p-0 d-flex justify-content-start align-items-center"
            >
              <Link to={`/jobs/${job._id}`} className="p-0">
                <ImageContainer
                  src={job.componyprofile}
                  alt="x"
                  width="60"
                  radiusClass="b-r-10"
                />
              </Link>
              <div className="p-2 m-l-10">
                <h4 className=" f-18">
                  <Link
                    to={`/jobs/${job._id}`}
                    className="p-0 text-dark f-16 f-w-600"
                  >
                    {job.title}
                  </Link>
                </h4>
                <p className="ww-100 p-0 m-0 d-flex justify-content-start">
                  <span className="m-r-20 text-muted f-12">
                    <i className="icofont icofont-location-pin text-muted"></i>
                    {job.componycity}
                  </span>
                  <span className="text-muted  f-12">
                    <i className="icofont icofont-building-alt text-muted"></i>
                    {job.componyname}
                  </span>
                </p>
              </div>
            </Col>
            <Col xl="1" xs="1" sm="1" className="p-0">
              <Heart size={18} className="position-absolute m-t-20 " />
              <Link to={`/job-page/${job._id}`}>
                <Maximize2 size={18} className="m-l-20 m-t-20" />
              </Link>
            </Col>
          </Row>
          <Col xl="12" className="p-0 m-t-30 f-flex align-items-center">
            <Row className="p-0 m-0 list-footer">
              <Col xl="6" xs="6" className="p-0 d-flex justify-content-start">
                <span className="blue-btn f-14">{job.level} level</span>
                <span className="text-danger m-l-10 red-btn f-14">
                  {job.jobtype}
                </span>
              </Col>
              <Col xl="6" xs="6" className="p-0 d-flex justify-content-end">
                <span className="f-w-900 text-primary p-t-5 f-14">جدید</span>
                <span className="text-muted m-l-10 p-t-5 f-14">2d</span>
              </Col>
            </Row>
          </Col>
        </li>
      ))}
    </>
  );
};

export default ListJobItem;
