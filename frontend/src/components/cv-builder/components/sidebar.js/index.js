import React, { useEffect } from "react";
import Knob from "knob";
import "./style.css";

const CvBuilderSidebar = () => {
  useEffect(() => {
    var profit = Knob({
      value: 40,
      left: 0,
      angleOffset: 90,
      className: "review",
      thickness: 0.1,
      fgColor: "#7366ff",
      readOnly: true,
      dynamicDraw: true,
      tickColorizeValues: true,
      bgColor: "#f6f7fb",
      lineCap: "round",
      displayPrevious: false,
    });
    document.getElementById("profit").appendChild(profit);
  }, []);
  return (
    <div>
      <h2 className="f-18 f-w-500 m-b-20">درصد تکمیل رزومه</h2>
      <div className="knob-block text-center">
        <div className="knob" id="profit"></div>
      </div>
    </div>
  );
};

export default CvBuilderSidebar;
