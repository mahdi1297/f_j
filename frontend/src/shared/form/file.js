import React from "react";
import { Col, FormGroup, Label } from "reactstrap";
import "./style.css";

const FileContainer = ({ itemData, data, setImage, square }) => {
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
        <div className="file__container">
          <div className={`avatar-upload ${square && "avatar-uplpad-square"}`}>
            <div className="avatar-edit">
              <input
                type="file"
                id="imageUpload"
                accept=".png, .jpg, .jpeg"
                style={{ width: "100%", height: "100%" }}
                className="upload"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                title="برای انتخاب تصویر کلیک کنید"
              />
              <label htmlFor="imageUpload"></label>
            </div>
            <div className="avatar-preview">
              <div
                id="imagePreview"
                style={{
                  background: `url(${process.env.REACT_APP_API}${data}) center no-repeat`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </FormGroup>
    </Col>
  );
};

export default FileContainer;
