/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CvBuilderSidebar from "./components/sidebar.js";
import TabsContainer from "./../../shared/tabs";
import { Container, Row, Col } from "reactstrap";
import { addUserDataAction } from "../../state/actions/userActions.js";
import { getResumeData } from "./data.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { steps } from "./steps";
import "./style.css";

const CvBuilder = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const resumeData = async () => {
    const request = await getResumeData(history);
    if (request.result) dispatch(addUserDataAction(request.result));
  };

  useEffect(() => {
    let tabs = steps();
    resumeData();
    setData(tabs);
    return () => {
      setData([]);
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col xl="9" lg="9" md="12" sm="12" xs="12">
          <TabsContainer data={data} color="primary" />
        </Col>
        <Col xl="3" lg="3" md="12" sm="12" xs="12">
          <CvBuilderSidebar />
        </Col>
      </Row>
    </Container>
  );
};
export default CvBuilder;
