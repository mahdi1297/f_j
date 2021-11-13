//you can use thin component instead of plain radio button.
//this component has some configurations

import React from "react";
import { Col, Label } from "reactstrap";
import { formErrorHandler } from "./../../utils/formErrorHandler";

const RadioContainer = ({ validation, register, error, itemData }) => {
  let errorHandler =
    error &&
    formErrorHandler(error, validation.minLength, validation.maxLength);

  return (
    <>
      <Col sm="12" lg={itemData.size} className="m-b-10">
        <Label className={`col-form-label`}>
          {itemData.label}{" "}
          {itemData.labelRequired && <span className="text-danger">(*)</span>}
        </Label>
        <div className={`${itemData.inline ? "d-flex flex-wrap" : ""}`}>
          {itemData.data &&
            itemData.data.map((x) => (
              <div key={x.id} className="d-flex ">
                <input
                  className="m-l-30"
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                  type="radio"
                  value={x.value}
                  {...register}
                />
                <Label className={`${itemData.inline ? "m-l-40" : ""}`}>
                  {x.label}
                </Label>
              </div>
            ))}
        </div>
        {errorHandler}
      </Col>
    </>
  );
};

export default RadioContainer;
