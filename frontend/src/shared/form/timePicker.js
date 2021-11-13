/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Label,
} from "reactstrap";
import "./style.css";

const TimePickerContainer = ({
  register,
  error,
  getTimepickerValue,
  itemData,
}) => {
  //get the next 40 minutes
  var now = new Date();
  now.setMinutes(now.getMinutes() + itemData.limitedFrom);
  now = new Date(now);
  let realMinute = now.getMinutes();
  let realHour = now.getHours();

  const [time, setTime] = useState({ minute: "00", hour: "00" });
  const [openMinuteDropDown, setOpenMinuteDropDown] = useState(false);
  const [openHourDropDown, setOpenHourDropDown] = useState(false);

  const [min, setMin] = useState([]);
  const [hour, setHour] = useState([]);

  useEffect(() => {
    if (itemData.limitedFrom) setTime({ minute: realMinute, hour: realHour });

    const minData = [];
    const hourData = [];
    for (let i = 1; i <= 60; i++) {
      minData.push(i);
      if (i <= 24) hourData.push(i);
    }
    setMin(minData);
    setHour(hourData);
  }, []);

  useEffect(() => {
    getTimepickerValue(time, itemData.name);
  }, [time]);

  const handleTimeMinute = (minute) => {
    let obj = { minute };
    if (Number(minute) <= 9) obj.minute = "0".concat(minute);
    setTime({ ...time, minute: obj.minute });
  };

  const handleTimeHour = (hour) => {
    let obj = { hour };
    if (Number(hour) <= 9) obj.hour = "0".concat(hour);
    setTime({ ...time, hour: obj.hour });
  };

  return (
    <>
      <Col lg={itemData.size} className="p-0">
        <Label className={`col-form-label`} style={{ marginRight: "15px" }}>
          {itemData.label}
          {itemData.labelRequired && <span className="text-danger">(*)</span>}
        </Label>
        <FormGroup className="d-flex align-items-center justify-content-center">
          <input
            className="form-control"
            style={{ width: "50%" }}
            onClick={() => setOpenHourDropDown(!openHourDropDown)}
            type="text"
            value={`${time.minute} : ${time.hour}`}
            {...register}
          />
          <div
            style={{ width: "50%" }}
            className="time__area d-flex align-items-center justify-content-end"
          >
            <Dropdown
              isOpen={openMinuteDropDown}
              toggle={() => setOpenMinuteDropDown(!openMinuteDropDown)}
            >
              <DropdownToggle className="rounded-0">دقیقه</DropdownToggle>
              <DropdownMenu
                style={{
                  height: "130px",
                  overflowY: "scroll",
                }}
              >
                {min.map((minute) => (
                  <DropdownItem
                    onClick={() => handleTimeMinute(String(minute))}
                    key={minute}
                    value={minute}
                    disabled={realMinute > minute && true}
                  >
                    {minute}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown
              isOpen={openHourDropDown}
              toggle={() => setOpenHourDropDown(!openHourDropDown)}
            >
              <DropdownToggle className="rounded-0">ساعت</DropdownToggle>
              <DropdownMenu
                style={{
                  height: "130px",
                  overflowY: "scroll",
                }}
              >
                {hour.map((hour) => (
                  <DropdownItem
                    onClick={() => handleTimeHour(String(hour))}
                    key={hour}
                    value={hour}
                    disabled={realHour > hour && true}
                  >
                    {hour}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          {error && <p>Error</p>}
        </FormGroup>
      </Col>
    </>
  );
};

export default TimePickerContainer;
