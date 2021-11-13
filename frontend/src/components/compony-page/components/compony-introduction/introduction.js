import React from "react";
import ComponyTotalData from "./totalData";
import ComponyMembers from "./members";
import SpinnerLoader from "../../../../shared/loader/loader";
import AboutInfo from "./aboutInfo";
import { useSelector } from "react-redux";
import { Col } from "reactstrap";

const ComponyIntroduction = () => {
  const data = useSelector((store) => store.compony);

  return (
    <div>
      <div className="d-flex flex-wrap">
        <Col xl="3" lg="3" md="5" sm="12" xs="12">
          {data && data.compony ? (
            <ComponyTotalData data={data.compony} />
          ) : (
            <SpinnerLoader />
          )}
        </Col>
        <Col xl="9" lg="9" md="7" sm="12" xs="12">
          {data && data.info ? (
            <>
              <ComponyMembers data={data.info.memebers} />
              <AboutInfo title="معرفی شرکت" data={data.info.introduction} />
              <AboutInfo title="تاریخچه شرکت" data={data.info.history} />
            </>
          ) : (
            <SpinnerLoader />
          )}
        </Col>
      </div>
    </div>
  );
};

export default ComponyIntroduction;
