import React, { useEffect, useState } from "react";
import ImageContainer from "../../../../shared/image";
import { getJobListData, jobActivationData } from "./data";
import { Edit, Trash, X } from "react-feather";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ComponyAnnouncments = () => {
  const token = useSelector((store) => store.token);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [count, setCount] = useState("");

  const getDataFromServer = async () => {
    const dbData = await getJobListData(token._id);
    if (dbData.status === 500) {
      setData([]);
      setError(true);
    } else if (dbData.status !== 500) {
      setError(false);
      setData(dbData.result);
      setCount(dbData.count);
    }
  };

  useEffect(() => {
    getDataFromServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeDeactiveHandler = async (removeStatus) => {
    await jobActivationData(removeStatus);
    getDataFromServer();
  };

  return (
    <ul className="p-0">
      {error && (
        <Col xl="12">
          <p className="d-flex justify-content-center">
            اشکالی سمت سرور به وجود آمده است
          </p>
        </Col>
      )}
      {data && count === 0 && (
        <Col xl="12">
          <p className="d-flex justify-content-center align-items-center">
            آیتمی وجود ندارد
            <X size={16} color="red" className="m-l-10 m-t-2" />
          </p>
        </Col>
      )}
      {data.length === 0 && count !== 0 && (
        <Col xl="12">
          <div className="loader-box">
            <div className="loader-15"></div>
          </div>
        </Col>
      )}
      {data &&
        data.map((job) => (
          <li
            className="p-2 m-4 b-r-10"
            key={job._id}
            style={{ boxShadow: "1px 3px 5px #ccc" }}
          >
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
              <Col
                xl="1"
                xs="1"
                sm="1"
                className="p-t-10 d-flex justify-content-end"
              >
                <div
                  className="m-r-5  "
                  style={{ width: "18px", height: "18px" }}
                >
                  {job.isRemoved === "true" && (
                    <Trash
                      onClick={() =>
                        activeDeactiveHandler({
                          _id: job._id,
                          remove: "false",
                        })
                      }
                      size={18}
                      className="cursor-pointer text-success"
                    />
                  )}
                  {job.isRemoved === "false" && (
                    <Trash
                      onClick={() =>
                        activeDeactiveHandler({
                          _id: job._id,
                          remove: "true",
                        })
                      }
                      size={18}
                      className="cursor-pointer text-danger"
                    />
                  )}
                </div>
                <div
                  className="m-r-5  "
                  style={{ width: "18px", height: "18px" }}
                >
                  <Edit size={18} className=" cursor-pointer" />
                </div>
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
    </ul>
  );
};

export default ComponyAnnouncments;
