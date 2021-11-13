import React, { useState, useEffect } from "react";
import JobResultResume from "./components/resume/resumeSender";
import ErrorIndicator from "../../../../helper/errorIndicator";
import ImageContainer from "../../../../shared/image";
import Loading from "../../../../shared/loading";
import parse from "html-react-parser";
import { Button, Col, Container, Row } from "reactstrap";
import { jobRsultData } from "./data";
import { CATEGORIES_FA } from "../../../../constant/messages";
import { withRouter } from "react-router";
import { useParams } from "react-router";
import {
  EXPERIENCE_LEVEL,
  AGREEMENT_TYPE,
  SALARY_LEVEL,
  SEND_RESUME,
  WORK_LEVEL,
} from "../../../../constant";
import "./style.css";

const JobListResultContent = ({ classes, history }) => {
  const [resumeWindow, setResumeWindow] = useState(false);
  const [data, setData] = useState({});

  const { job } = useParams();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await jobRsultData(job, history);
      error.errorType && ErrorIndicator();
      setData(data.result);
    };
    getData();
    return () => setData({});
  }, [history, job]);

  const resumeBtnClickHandler = () => setResumeWindow(true);

  return (
    <>
      <Row className={`content ${classes && classes}`}>
        {resumeWindow && (
          <div className="resume-container shadow-lg p-25 shadow-showcase">
            <JobResultResume setResumeWindow={setResumeWindow} />
          </div>
        )}
        {data.title === undefined ? (
          <Loading />
        ) : (
          <Container>
            <Row>
              <Col>
                <ImageContainer
                  src={data.componymainimage}
                  alt=""
                  width="100%"
                  height="200px"
                  radiusClass="radius-top"
                />
                <img
                  src={data.componyprofile}
                  alt="x"
                  width="120"
                  className="small-image border-radius"
                />
              </Col>
            </Row>
            <div>
              <div className="d-flex justify-content-between align-items-center title">
                <h2 className="f-24">{data.title}</h2>
                <Button color="primary" onClick={resumeBtnClickHandler}>
                  {SEND_RESUME}
                  <i className="icofont icofont-send-mail f-30 m-l-10"></i>
                </Button>
              </div>
              <div className="m-t-20 d-flex">
                <p className="text-primary f-16 p-0">{data.componyname}</p>
                <p className="text-muted m-l-20 p-0 f-16">{data.componycity}</p>
              </div>
            </div>
            {/* scroll features */}
            <div className="job-features-ul">
              <ul className="job-list-scroll d-flex">
                <li className="job-features-ul-li shadow-lg p-25 shadow-showcase">
                  <p>{EXPERIENCE_LEVEL}</p>
                  <p> {data.experience}</p>
                </li>
                <li className="job-features-ul-li shadow-lg p-25 shadow-showcase">
                  <p>{SALARY_LEVEL}</p>
                  <p>{data.salary} </p>
                </li>
                <li className="job-features-ul-li shadow-lg p-25 shadow-showcase">
                  <p>{WORK_LEVEL}</p>
                  <p>{data.level}</p>
                </li>
                <li className="job-features-ul-li shadow-lg p-25 shadow-showcase">
                  <p>{AGREEMENT_TYPE}</p>
                  <p> {data.jobtype}</p>
                </li>
              </ul>
            </div>
            {/* main content */}
            <div className="m-t-40">
              <div
                className="f-16 main_body_container"
                style={{ fontFamily: "shabnam!important" }}
              >
                {parse(data.body)}
              </div>
            </div>
            <h3 className="f-18 m-t-50"> {CATEGORIES_FA}</h3>

            <Col
              xl="12"
              className="p-0 m-t-30 p-b-30 f-flex align-items-center"
            >
              {data.fields.map((f, i) => (
                <span key={i} className="f-w-900 text-primary p-10">
                  {f}
                </span>
              ))}
            </Col>
          </Container>
        )}
      </Row>
    </>
  );
};

export default withRouter(JobListResultContent);
