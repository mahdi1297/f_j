import React, { useState } from "react";
import ImageContainer from "./../../shared/image";
import DropDown from "./dropDown";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const history = useHistory();

  const [sidebar, setSidebar] = useState(false);
  const token = useSelector((store) => store.token);

  const path = history.location.pathname;

  const sidebarShowHandler = () => setSidebar(true);
  const sidebarHideHandler = () => setSidebar(false);

  return (
    <>
      <div className="top__header w-100">
        <Container
          fluid={true}
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            <Link to="/">
              <ImageContainer
                src={require("./../../assets/images/logo/logo-icon.png")}
                width="40px"
              />
            </Link>
            <ul className="d-flex m-r-50">
              <li>
                <Link
                  to="/jobs"
                  className={`text-dark f-16 ${
                    path === "/jobs" && "border__active"
                  }`}
                >
                  آگهی ها
                </Link>
              </li>
              <li>
                <Link
                  to="/cv-builder"
                  className={`text-dark f-16 ${
                    path === "/cv-builder" && "border__active"
                  }`}
                >
                  رزومه ساز
                </Link>
              </li>
              <li>
                <Link
                  to="/componies"
                  className={`text-dark f-16 ${
                    path === "/componies" && "border__active"
                  }`}
                >
                  شرکت ها
                </Link>
              </li>
            </ul>
          </div>
          <div
            onMouseEnter={sidebarShowHandler}
            onMouseLeave={sidebarHideHandler}
          >
            {token.name !== undefined || token.profileimage !== undefined ? (
              <>
                <Link to="/" className="d-flex align-items-center">
                  <p className="text-dark m-3">
                    {token.name} {token.lastname}
                  </p>
                  <ImageContainer
                    src={
                      token.profile ||
                      `http://localhost:5000/${token.profileimage}`
                    }
                    width="50"
                    radiusClass="b-r-10"
                  />
                </Link>
                <DropDown active={sidebar} token={token} />
              </>
            ) : (
              <Link to="/auth/user/register" className="btn btn-primary">
                ثبت نام
              </Link>
            )}
          </div>
        </Container>
      </div>
      <div className="main__header"></div>
    </>
  );
};

export default Header;
