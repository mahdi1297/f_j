import React, { useEffect } from "react";
import { Col, FormGroup, Label } from "reactstrap";
import { configType } from "../../utils/formConfig";
import { formErrorHandler } from "../../utils/formErrorHandler";

const TextareaContainer = ({ register, error, itemData, classname }) => {
  useEffect(() => {
    configType("textarea");
  }, []);

  let errorHandler =
    error &&
    !itemData.notApplyError === true &&
    formErrorHandler(
      error,
      itemData.validation.minLength,
      itemData.validation.maxLength
    );

  return (
    <Col lg={itemData.size} className={classname ? classname : ""}>
      <FormGroup>
        <Label className={`col-form-label`}>
          {itemData.label}{" "}
          {itemData.labelRequired && <span className="text-danger">(*)</span>}
        </Label>
        <textarea
          style={{ width: "100%" }}
          className="form-control"
          placeholder={itemData.placeholder}
          rows={itemData.rows && itemData.rows}
          {...register}
        ></textarea>
        {errorHandler}
      </FormGroup>
    </Col>
  );
};

export default TextareaContainer;
