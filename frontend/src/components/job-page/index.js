import React, { useEffect, useState } from "react";
import TotalPageLoading from "./../../shared/loader/totalPageLoader";
import PageHeader from "./pageHeader";
import { jobRsultData } from "../jobs-list/components/job-result/data";
import { withRouter } from "react-router";
import { useParams } from "react-router";
import { Col, Container, Row } from "reactstrap";
import "./style.css";

const JobPage = ({ history }) => {
  const { _id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getJobData = async (_id, history) => {
    setIsLoading(true);
    const request = await jobRsultData(_id, history);
    if (request) setData(request.result);
    setIsLoading(false);
  };

  console.log(data);

  useEffect(() => {
    getJobData(_id, history);
  }, [_id, history]);
  return (
    <div>
      <Container>
        {isLoading ? (
          <TotalPageLoading />
        ) : (
          data && (
            <PageHeader
              componymainimage={data.componymainimage}
              componyprofile={data.componyprofile}
              title={data.title}
              componyname={data.componyname}
            />
          )
        )}
        <Row>
          <Col xl="9" sm="9" md="12" xs="12" className="border">
            Something
          </Col>
          <Col xl="3" sm="3" md="12" xs="12" className="border">
            Something
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(JobPage);
