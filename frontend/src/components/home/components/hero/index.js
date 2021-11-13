import React from "react";
import "./../../style.css";

const HeroHome = () => {
  return (
    <>
      <div className="hero__container w-100">
        <div>
          <h1 style={{ color: "#7366ff" }}>Job Finder</h1>
          <p className="f-20">به راحتی استخدام شوید</p>
        </div>
        <div className="hero__background"></div>
      </div>
    </>
  );
};

export default HeroHome;
