/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TotalPageLoader from "./../../../../shared/loader/totalPageLoader";
import FormContainer from "./../../../../shared/form/formContainer";
import TextEditor from "../../../../shared/editor";
import { createAnnouncement } from "./data";
import { Col, Row, Button } from "reactstrap";
import { formStructure } from "./formStructure";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  ANNOUNCEMENT_TEXT_FA,
  CREATE_NEW_ANNOUNCEMENT_FA,
  PRIMARY,
  SUBMIT_ANNOUNCEMENT_FA,
  SUMBIT,
} from "../../../../constant/messages";

const NewAnnouncements = () => {
  const [bodyValue, setBodyValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoadin] = useState(false);

  const token = useSelector((store) => store.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createJobSubmitHandler = async (data, e) => {
    e.target.reset();
    setLoadin(true);
    const newDataToSend = {
      componyid: token._id,
      componyname: token.componyname,
      componycity: token.componycity,
      title: data.title,
      jobtype: data.jobtype,
      experience: data.experience,
      level: data.level,
      salary: data.salary,
      body: bodyValue,
      fields: ["react", "redux"],
      componymainimage: token.mainImage,
      componyprofile: token.profileimage,
    };

    const request = await createAnnouncement(newDataToSend);
    if (request && request.status !== 500) setData(request.result);

    reset();
    setLoadin(false);
  };
  return (
    <>
      <Row>
        <Col xl="12">
          <form onSubmit={handleSubmit(createJobSubmitHandler)}>
            <h1 className="f-22 m-b-30 m-t-30">{CREATE_NEW_ANNOUNCEMENT_FA}</h1>
            <FormContainer
              data={formStructure}
              register={register}
              errors={errors}
            />
            <TextEditor
              title={ANNOUNCEMENT_TEXT_FA}
              isRequired={true}
              setBodyValue={setBodyValue}
            />
            <Button
              color={PRIMARY}
              type={SUMBIT}
              onClick={() => setLoadin(!true)}
            >
              {SUBMIT_ANNOUNCEMENT_FA}
            </Button>
          </form>
        </Col>
        {loading && <TotalPageLoader />}
      </Row>
    </>
  );
};

export default NewAnnouncements;
