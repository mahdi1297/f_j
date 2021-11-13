import React, { lazy, Suspense } from "react";
import SpinnerLoader from "./../../shared/loader/loader";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const ComponyRegister = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./compony/register/index"));
  });
});
const ComponyLogin = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./compony/login/index"));
  });
});
const UserRegister = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./user/register/index"));
  });
});
const UserLogin = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./user/login/index"));
  });
});

const AuthMainPage = ({ location }) => {
  return (
    <div className="login-main-container">
      <Container fluid={true}>
        <Row>
          <Col xl="12" xs="12" className="p-0 d-flex justify-content-center">
            <Col xl="4" lg="6" md="9" xm="12">
              <Card className=" m-t-50 ">
                <div
                  style={{
                    width: "100%",
                    height: "50px",
                  }}
                  className="container m-t-50 w-100 "
                >
                  <ul className="authen__tab d-flex w-100 justify-content-between">
                    <li
                      className={`btn btn-${
                        location.pathname.includes("/auth/user") && "primary"
                      }`}
                    >
                      <Link
                        to="/auth/user/login"
                        className={`${
                          location.pathname.includes("/auth/user")
                            ? "text-white"
                            : "text-dark"
                        }`}
                      >
                        کاربر
                      </Link>
                    </li>
                    <li
                      className={`btn btn-${
                        location.pathname.includes("/auth/compony") && "primary"
                      }`}
                    >
                      <Link
                        to="/auth/compony/login"
                        className={`${
                          location.pathname.includes("/auth/compony")
                            ? "text-white"
                            : "text-dark"
                        }`}
                      >
                        شرکت
                      </Link>
                    </li>
                  </ul>
                </div>
                <CardBody>
                  <Route exact path="/auth/user/login">
                    <Suspense fallback={<SpinnerLoader />}>
                      <UserLogin />
                    </Suspense>
                  </Route>
                  <Route exact path="/auth/user/register">
                    <Suspense fallback={<SpinnerLoader />}>
                      <UserRegister />
                    </Suspense>
                  </Route>
                  <Route exact path="/auth/compony/login">
                    <Suspense fallback={<SpinnerLoader />}>
                      <ComponyLogin />
                    </Suspense>
                  </Route>
                  <Route exact path="/auth/compony/register">
                    <Suspense fallback={<SpinnerLoader />}>
                      <ComponyRegister />
                    </Suspense>
                  </Route>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default withRouter(AuthMainPage);
