import React from "react";
import ImageContainer from "./../../../../shared/image";

const ComponyMembers = ({ data }) => {
  return (
    <div>
      <h1 className="f-18 m-t-40 m-b-40">اعضای شرکت</h1>

      {data &&
        data.map((member, i) => (
          <div
            className="col-12 d-flex m-b-20 member-container flex-wrap"
            key={i}
          >
            <div className="col-sm-12 col-xs-12 col-xl-4 d-flex justify-content-between">
              <div>
                <ImageContainer
                  src={member.memeberimage}
                  width="100"
                  height="100"
                  radiusClass="b-r-5"
                />
              </div>
              <div className="w-100 p-t-5">
                <span className=" member-name-border">
                  {member.memberusername}
                </span>
                <p className="w-100 p-3">{member.memberrole}</p>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-xl-8 p-4">
              {member.aboutmember}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComponyMembers;
