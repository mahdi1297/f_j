import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { formErrorHandler } from "../../utils/formErrorHandler";

const CheckBoxContainer = ({
  itemData,
  register,
  error,
  valueGetter,
  itemToSendTitle,
}) => {
  let errorHandler = error && formErrorHandler(error);
  return (
    <>
      <Col lg={itemData.size} className="p-l-30" style={{ marginTop: "-20px" }}>
        <FormGroup>
          <Label className="col-form-label">
            {itemData.label} {itemData.labelRequired && <span>(Required)</span>}
          </Label>
          <div className="form-group m-checkbox-inline mb-0 ml-3">
            <div className="w-100 checkbox checkbox-primary">
              {itemData.data.map((item) => (
                <div
                  key={item.id}
                  className="w-100 display-block d-flex justify-content-between align-items-center"
                >
                  <div>
                    <Input
                      id={item.inputId}
                      type="checkbox"
                      {...register}
                      onChange={
                        (e) =>
                          valueGetter(
                            itemToSendTitle,
                            item.name,
                            e.target.checked
                          )
                        // valueGetter(
                        //   item.name,
                        //   e.target.checked,
                        //   itemToSendTitle
                        // )
                      }
                    />
                    <Label className="mb-0" htmlFor={item.inputId}>
                      {item.label}
                    </Label>
                  </div>
                  {item.amount && (
                    <div>
                      <p
                        style={{
                          position: "relative",
                          top: "10px",
                          padding: "3px",
                          background: "#eae8ff",
                          color: "#8a70ff",
                          borderRadius: "10px",
                        }}
                      >
                        {item.amount}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FormGroup>
        {errorHandler}
      </Col>
    </>
  );
};

export default CheckBoxContainer;
