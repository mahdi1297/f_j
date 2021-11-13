/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TextareaContainer from "../../../../../shared/form/textArea";
import {
  ADD_COMPONY_ABOUT_FA,
  CANCEL_FA,
  SUBMIT_INFORMATION_FA,
} from "../../../../../constant/messages";
import { getComponyData, submitAboutComponyData } from "./data";
import { ArrowDown, ArrowLeft, Plus } from "react-feather";
import { componyAboutStructure } from "./formStructure";
import { Button, Card, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const ComponyHistoySection = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [addMemeberWindwo, setAddMemberWindow] = useState(false);
  const [bodyValue, setBodyValue] = useState("");

  const token = useSelector((store) => store.token);

  useEffect(() => {
    componyData();
    aboutValueSetter();
  }, []);

  const aboutValueSetter = async () => {
    const response = await getComponyData(token._id);
    if (response.status === 200) {
      setValue("introduction", response.result.introduction);
      setBodyValue(response.result.introduction);
    }
  };

  const componyData = async () => {
    const response = await getComponyData(token._id);
    if (response.status === 200) setBodyValue(response.result.introduction);
  };

  const addUserWindowOpenHnalder = () => setAddMemberWindow(true);
  const addUserWindowCloseHnalder = () => setAddMemberWindow(false);

  const aboutSubmitHandler = async (data) => {
    const dataToSend = {
      componyid: token._id,
      update_type: "introduction",
      introduction: data.introduction,
    };
    await submitAboutComponyData(dataToSend);
    aboutValueSetter();
  };
  return (
    <>
      <Card className="m-t-30">
        <div className="d-flex align-items-center">
          <Col xl="11" className="p-0">
            <h1 className="f-20 m-b-30 m-t-30 d-flex align-items-center">
              <Plus size={18} color={"#7366ff"} className="m-r-10" />
              {ADD_COMPONY_ABOUT_FA}
            </h1>
          </Col>
          <Col xl="1" className="p-0 d-flex justify-content-end">
            {addMemeberWindwo ? (
              <ArrowLeft
                className="cursor-pointer display-block"
                size={18}
                onClick={addUserWindowCloseHnalder}
              />
            ) : (
              <ArrowDown
                className="cursor-pointer display-block"
                size={18}
                onClick={addUserWindowOpenHnalder}
              />
            )}
          </Col>
        </div>
        <div>
          <Col className="p-0" xl="12">
            {addMemeberWindwo && (
              <form onSubmit={handleSubmit(aboutSubmitHandler)}>
                {componyAboutStructure.map((item) => (
                  <TextareaContainer
                    classname="p-0"
                    key={item.id}
                    itemData={item}
                    register={{
                      ...register(item.name, {
                        required: item.validation.required,
                      }),
                    }}
                    errors={errors[item.name]}
                  />
                ))}
                <div className="d-flex justify-content-between">
                  <Button
                    type="button"
                    color="danger"
                    onClick={addUserWindowCloseHnalder}
                  >
                    {CANCEL_FA}
                  </Button>
                  <Button type="submit" color="primary">
                    {SUBMIT_INFORMATION_FA}
                  </Button>
                </div>
              </form>
            )}
          </Col>
        </div>
      </Card>
    </>
  );
};

export default ComponyHistoySection;
