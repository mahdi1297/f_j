import React from "react";
import { Activity, Search, Smile } from "react-feather";
import { Col } from "reactstrap";
import {
  INTRODUCTION_TEXT_ONE,
  INTRODUCTION_TEXT_THREE,
  INTRODUCTION_TEXT_TWO,
  INTRO_FIND_BEST_JOB_FA,
  INTRO_FIND_JOB_WITH_SMILE_FA,
  INTRO_TO_CEO_FA,
} from "../../../../constant/messages";
import "./../../style.css";

const WhyUs = () => {
  return (
    <Col className="m-0 p-0 p-t-20 p-b-20">
      <div className="w-100 m-t-20 d-flex justify-content-center">
        <h1 className="f-22">چرا Job Finder</h1>
      </div>
      <div className="d-flex justify-content-between flex-wrap m-t-50 p-20">
        <div className="why_item">
          <div className="item-card_header">
            <Activity size={30} color="rgb(115, 102, 255)" />
          </div>
          <h2 className="f-18">{INTRO_TO_CEO_FA}</h2>
          <p>{INTRODUCTION_TEXT_ONE}</p>
        </div>
        <div className="why_item">
          <div className="item-card_header">
            <Search size={30} color="rgb(115, 102, 255)" />
          </div>
          <h2 className="f-18">{INTRO_FIND_BEST_JOB_FA}</h2>
          <p>{INTRODUCTION_TEXT_TWO}</p>
        </div>
        <div className="why_item">
          <div className="item-card_header">
            <Smile size={30} color="rgb(115, 102, 255)" />
          </div>
          <h2 className="f-18">{INTRO_FIND_JOB_WITH_SMILE_FA}</h2>
          <p>{INTRODUCTION_TEXT_THREE}</p>
        </div>
      </div>
    </Col>
  );
};

export default WhyUs;
