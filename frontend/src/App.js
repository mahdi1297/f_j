/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PanelCompony from "./components/panel-compony";
import ComponyPage from "./components/compony-page";
import jwt_decode from "jwt-decode";
import CvBuilder from "./components/cv-builder";
import jobsList from "./components/jobs-list";
import Cookies from "universal-cookie";
import Compony from "./components/compony";
import Header from "./layout/header";
import Home from "./components/home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { addUserLoginTokenAction } from "./state/actions/loginActions";
import { ToastContainer } from "react-toastify";
import { checkUserData } from "./data";
import { withCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import JobPage from "./components/job-page";

const App = ({ anim }) => {
  const cookies = new Cookies();

  const [userType, setUserType] = useState("");

  const dispatch = useDispatch();

  const dataGetter = async (token, type) => {
    const tokenRequest = await checkUserData(token, type);
    if (tokenRequest.message === "Okay") {
    } else {
      dispatch(addUserLoginTokenAction(tokenRequest.token.result));
      cookies.set("u_t", tokenRequest.token.token, {
        path: "/",
        maxAge: 50000000,
      });
    }
  };
  useEffect(() => {
    const token = cookies.get("u_t", true);
    if (token === "" || token === undefined) cookies.remove("u_t");
    else {
      const decodedToken = jwt_decode(token.token);
      dataGetter(cookies.cookies.u_t, decodedToken.type);
      setUserType(decodedToken.type);
    }
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
          <div className="page-body-wrapper sidebar-icon">
            <div className="page-body" style={{ background: "#fff" }}>
              <div className="position-relative top-50 ">
                <TransitionGroup>
                  <CSSTransition timeout={100} classNames={anim} unmountOnExit>
                    <Route exact path="/" component={Home} />
                  </CSSTransition>
                  <CSSTransition timeout={100} classNames={anim} unmountOnExit>
                    <Route path="/jobs" component={jobsList} />
                  </CSSTransition>
                  <CSSTransition timeout={100} classNames={anim} unmountOnExit>
                    <Route path="/job-page/:_id" component={JobPage} />
                  </CSSTransition>
                  <CSSTransition timeout={100} classNames={anim} unmountOnExit>
                    <Route exact path="/componies" component={Compony} />
                  </CSSTransition>
                  <CSSTransition timeout={100} classNames={anim} unmountOnExit>
                    <Route
                      path="/compony-page/:_id"
                      exact
                      component={ComponyPage}
                    />
                  </CSSTransition>
                  <CSSTransition timeout={100} classNames={anim} unmountOnExit>
                    <Route exact path="/cv-builder" component={CvBuilder} />
                  </CSSTransition>
                  <CSSTransition timeout={100} classNames={anim} unmountOnExit>
                    <Route
                      exact
                      path="/panel/compony"
                      component={PanelCompony}
                    />
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default withCookies(App);
