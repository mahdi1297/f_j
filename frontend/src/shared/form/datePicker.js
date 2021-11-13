/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import DatePicker from "react-multi-date-picker";
import { Col, FormGroup, Label } from "reactstrap";
import { formErrorHandler } from "../../utils/formErrorHandler";
import { configType } from "../../utils/formConfig";
import { Calendar } from "react-feather";
import "./style.css";

const DatePickerContainer = ({
  register,
  getDatepickerValue,
  submited,
  itemData,
}) => {
  const [date, setDate] = useState({});

  let errorHandler =
    submited && date.persian === undefined && formErrorHandler("required");

  useEffect(() => {
    if (date.date === null) {
      setDate("");
    }
    configType("input");
  }, [date]);

  submited &&
    !itemData.notApplyError === true &&
    date.persian === undefined &&
    itemData.validation.required === true &&
    formErrorHandler("required");

  const convert = (date, format = "DD-MM-YYYY") => {
    let object = { date, format };
    setDate(() => ({
      persian: new DateObject(object).format(),
      ...object,
    }));
    getDatepickerValue(
      {
        persian: new DateObject(object).format(),
        ...object,
      },
      itemData.name
    );
  };

  const convertFaToEn = (s) =>
    s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

  return (
    <>
      {itemData && (
        <Col lg={itemData.size}>
          <FormGroup>
            <Label className={`col-form-label`}>
              {itemData.label}{" "}
              {itemData.labelRequired && (
                <span className="text-danger">(*)</span>
              )}
            </Label>
            <div className="d-flex align-items-center">
              <Calendar
                size="22"
                color={"#505050"}
                className="position-absolute p-r-5"
              />
              <DatePicker
                maxDate="1405/5/8"
                minDate={itemData.min && convertFaToEn(itemData.min)}
                onChange={convert}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
              />
            </div>

            <input
              className="form-control"
              id="timepicker"
              type="hidden"
              {...register}
            />
            {itemData.validation.required === true && errorHandler}
          </FormGroup>
        </Col>
      )}
    </>
  );
};

export default DatePickerContainer;
