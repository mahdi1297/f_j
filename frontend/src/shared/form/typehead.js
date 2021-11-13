import React from "react";
import { Col, FormGroup, Label } from "reactstrap";
import { formErrorHandler } from "../../utils/formErrorHandler";
import { Typeahead } from "react-bootstrap-typeahead";
import "./style.css";

const TypeheadContainer = ({ itemData, error, typeheadDefaults, setData }) => {
  let typehead;

  let errorHandler =
    error &&
    formErrorHandler(
      error,
      itemData.validation.minLength,
      itemData.validation.maxLength
    );

  if (itemData.typeheadType === "filler") {
    typehead = (
      <Typeahead
        id="custom-typeahead"
        allowNew
        multiple
        defaultSelected={typeheadDefaults}
        newSelectionPrefix="اضافه کردن مهارت : "
        options={["react", "redux"]}
        placeholder="مهارت های خود را تایب کنید"
        onChange={(e) => setData && setData(e)}
      />
    );
  } else {
    return false;
  }
  return (
    <>
      <Col lg={itemData.size}>
        <FormGroup style={{ textAlign: "right" }}>
          <Label className={`col-form-label`}>
            {itemData.label}{" "}
            {itemData.labelRequired && <span className="text-danger">(*)</span>}
          </Label>
          {typehead}
          {errorHandler}
        </FormGroup>
      </Col>
    </>
  );
};

export default TypeheadContainer;
