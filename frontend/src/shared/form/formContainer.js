/* eslint-disable array-callback-return */
import React from "react";
import InputContainer from "./input";
import RadioContainer from "./radio";
import SelectContainer from "./select";
import TextareaContainer from "./textArea";
import { Row } from "reactstrap";
import TypeheadContainer from "./typehead";
import CheckBoxContainer from "./checkbox";
import DatePickerContainer from "./datePicker.js";
import TimePickerContainer from "./timePicker";

const FormContainer = ({
  data,
  register,
  errors,
  getDatepickerValue,
  submited,
  setTimepicker,
  timePicker,
  getTimepickerValue,
  typeheadDefaults,
  valueGetter,
}) => {
  const dataMapper = data.map((item) => {
    switch (item.type) {
      case "text":
      case "number":
      case "email":
      case "password":
      case "file":
        return (
          <InputContainer
            key={item.id}
            itemData={item}
            type={item.type}
            register={{
              ...register(item.name, {
                required: item.validation.required,
                minLength: item.validation.minLength,
                maxLength: item.validation.maxLength,
                pattern: item.validation.pattern,
              }),
            }}
            error={errors[item.name]}
          />
        );
      case "select":
        return (
          <SelectContainer
            key={item.id}
            itemData={item}
            data={item.data}
            register={{
              ...register(item.name, { required: item.validation.required }),
            }}
            error={errors[item.name]}
          />
        );
      case "radio":
        return (
          <RadioContainer
            key={item.id}
            size={item.size}
            itemData={item}
            register={{ ...register(item.name, { required: true }) }}
            error={errors[item.name]}
            validation={item.validation}
          />
        );
      case "checkbox":
        return (
          <CheckBoxContainer
            key={item.id}
            itemData={item}
            valueGetter={valueGetter}
            register={{
              ...register(item.name, { required: item.validation.required }),
            }}
            error={errors[item.name]}
          />
        );
      case "textarea":
        return (
          <TextareaContainer
            key={item.id}
            itemData={item}
            register={{
              ...register(item.name, {
                required: item.validation.required && item.validation.required,
                minLength:
                  item.validation.minLength && item.validation.minLength,
                maxLength:
                  item.validation.maxLength && item.validation.maxLength,
              }),
            }}
            error={errors[item.name]}
          />
        );
      case "datePicker":
        return (
          <DatePickerContainer
            key={item.id}
            itemData={item}
            register={{
              ...register(item.name, {
                required: item.validation.required && item.validation.required,
              }),
            }}
            error={errors[item.name]}
            getDatepickerValue={getDatepickerValue}
            submited={submited}
          />
        );
      case "timepicker":
        return (
          <TimePickerContainer
            key={item.id}
            itemData={item}
            setTime={setTimepicker}
            time={timePicker}
            register={{
              ...register(item.name, {
                required: item.validation.required && item.validation.required,
              }),
            }}
            error={errors[item.name]}
            getTimepickerValue={getTimepickerValue}
          />
        );
      case "typehead":
        return (
          <TypeheadContainer
            key={item.id}
            itemData={item}
            typeheadDefaults={typeheadDefaults}
          />
        );
      default:
        break;
    }
  });

  return (
    <>
      <Row className="d-flex align-items-center justify-content-center">
        {dataMapper}
      </Row>
    </>
  );
};

export default FormContainer;
