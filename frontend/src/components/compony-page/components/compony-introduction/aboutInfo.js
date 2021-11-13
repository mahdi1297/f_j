import React from "react";

const AboutInfo = ({ data, title }) => {
  return (
    <div className="m-t-30 b-l p-2 b-r-5">
      <h1 className="f-18 m-t-40 m-b-40">{title}</h1>
      <p className="p-2 b-r-5 f-16">{data}</p>
    </div>
  );
};

export default AboutInfo;
