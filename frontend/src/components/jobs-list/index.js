import React, { useState, lazy, Suspense } from "react";
import TotalPageLoader from "../../shared/loader/totalPageLoader";
import ModalContainer from "../../shared/modal";
import JobLists from "./components/list";
import Search from "../search";
import { Container, Row, Col, Button } from "reactstrap";
import { AlignCenter } from "react-feather";
import { withRouter } from "react-router";
import "./style.css";

const JobListFilter = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/filter"));
  });
});
const JobListResult = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./components/job-result"));
  });
});

const JobsList = ({ history }) => {
  const [filterModal, setFilterModal] = useState(false);

  const filterModalToggle = () => setFilterModal(!filterModal);

  return (
    <>
      <Container fluid={true}>
        <Row>
          <Search />
        </Row>
        <Button
          color="primary"
          onClick={filterModalToggle}
          className="m-r-0 m-b-40 align-items-center filter-btn"
        >
          فیلتر ها
          <AlignCenter size={20} className="m-l-10" />
        </Button>
        <Row className="p-0 d-flex justify-content-between">
          <Col xl="3" lg="1" md="6" sm="12" xs="12" className="md-d-none">
            {!filterModal && (
              <Suspense fallback={<TotalPageLoader />}>
                <JobListFilter />
              </Suspense>
            )}
          </Col>
          <Col xl="3" lg="4" md="12" sm="12" xs="12" className="p-0 main">
            <JobLists />
          </Col>
          <Col xl="6" lg="8" md="12" sm="12" className="content">
            <Suspense fallback={<TotalPageLoader />}>
              <JobListResult />
            </Suspense>
          </Col>
        </Row>

        {/* modals */}
        <ModalContainer
          modal={filterModal}
          modalToggle={filterModalToggle}
          size="lg"
        >
          {filterModal && (
            <>
              <h1 className="p-3 f-20">اعمال فیلتر برای آگهی ها</h1>
              <Suspense fallback={<TotalPageLoader />}>
                <JobListFilter />
              </Suspense>
            </>
          )}
        </ModalContainer>
      </Container>
    </>
  );
};

export default withRouter(JobsList);
