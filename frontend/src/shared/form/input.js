/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Col, FormGroup, Label } from "reactstrap";
import { formErrorHandler } from "../../utils/formErrorHandler";
import { configType } from "./../../utils/formConfig";

const InputContainer = ({
  register,
  error,
  autocomplete,
  onpaste,
  itemData,
}) => {
  let errorHandler =
    error &&
    formErrorHandler(
      error,
      itemData.validation.minLength,
      itemData.validation.maxLength
    );

  useEffect(() => {
    configType("input");
  }, []);

  const onInputDeleteSpace = (e) => {
    if (e.target.value === " ") {
      e.target.value = null;
      e.preventDefault();
    }
  };

  return (
    <Col
      lg={itemData.size}
      className={itemData.containerStyle && itemData.containerStyle}
    >
      <FormGroup style={{ textAlign: "right" }}>
        <Label className={`col-form-label`}>
          {itemData.label}{" "}
          {itemData.labelRequired && <span className="text-danger">(*)</span>}
        </Label>
        <input
          className="form-control"
          type={itemData.type}
          placeholder={itemData.placeholder}
          disabled={itemData.disabled ? true : false}
          autoComplete={autocomplete}
          onPaste={onpaste}
          onInput={onInputDeleteSpace}
          {...register}
        />
        {errorHandler}
      </FormGroup>
    </Col>
  );
};

export default InputContainer;
