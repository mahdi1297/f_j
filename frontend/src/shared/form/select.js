import React from "react";
import { Col, FormGroup, Label } from "reactstrap";
import { REQIURED_ERROR } from "../../constant/errors";

//you can use thin component instead of plain select.
//this component has some configurations

const SelectContainer = ({ register, error, data, itemData }) => {
  return (
    <Col lg={itemData.size}>
      <FormGroup>
        <Label className={`col-form-label`}>
          {itemData.label}{" "}
          {itemData.labelRequired && <span className="text-danger">(*)</span>}
        </Label>
        <select className="form-control" {...register}>
          <option style={{ display: "none" }}></option>
          {itemData.data &&
            data.map((item) => <option key={item.id}>{item.title}</option>)}
        </select>
        {error && (
          <>
            <p className="p-16 text-danger">{REQIURED_ERROR}</p>
          </>
        )}
      </FormGroup>
    </Col>
  );
};

export default SelectContainer;
