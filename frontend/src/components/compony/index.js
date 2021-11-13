import React, { useEffect, useState } from "react";
import ImageContainer from "../../shared/image";
import { Button, Col, Container, Row } from "reactstrap";
import { getComponyData } from "./data";
import { Link } from "react-router-dom";
import "./style.css";
import TotalPageLoader from "../../shared/loader/totalPageLoader";

const Compony = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const componiesList = async () => {
    setLoading(true);
    const req = await getComponyData();
    setData(req.result);
    setLoading(false);
  };
  useEffect(() => {
    componiesList();
    return () => {
      setData([]);
    };
  }, []);

  console.log(loading);

  return (
    <Container>
      <Row>
        <h1 className="f-22">برترین شرکت ها</h1>
      </Row>
      <Row className="m-t-40">
        {loading && <TotalPageLoader />}
        {data &&
          data.map((compony) => (
            <Col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              className="p-3"
              key={compony._id}
            >
              <Col xl="12">
                <Link to="/">
                  <ImageContainer
                    src={compony.profileimage}
                    alt=""
                    width="70"
                  />
                </Link>
              </Col>
              <Col xl="12">
                <h2 className="f-18 m-t-10">{compony.componyname}</h2>
              </Col>
              <Col xl="12">
                <p className="f-14 text-muted m-t-10">{compony.description}</p>
              </Col>
              <Col xl="12" className="d-flex compony-item-subs m-t-30">
                <div>{compony.workers} نفر</div>
                <div>{compony.field}</div>
                <div> امتیاز: ۵</div>
              </Col>
              <Col xl="12" className="m-t-40">
                <Button color="primary">
                  <Link
                    to={`/compony-page/${compony._id}`}
                    className="text-white"
                  >
                    مشاهده صفحه ی شرکت
                  </Link>
                </Button>
              </Col>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Compony;
