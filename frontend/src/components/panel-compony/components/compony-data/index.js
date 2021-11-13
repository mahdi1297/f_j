/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TotalPageLoader from "./../../../../shared/loader/totalPageLoader";
import FormContainer from "./../../../../shared/form/formContainer";
import FileContainer from "../../../../shared/form/file";
import { updateComponyData, getComponyData } from "./data";
import { FILL_INFO_FA, NOT_COMPELETE_INFO } from "../../../../constant/errors";
import { Alert, Button, Col, Form, Row } from "reactstrap";
import { SUBMIT_INFORMATION_FA } from "./../../../../constant/messages";
import { IS_FULL_INFORMATION } from "../..//../../constant/messages";
import { valueAppender } from "../../../../helper/valueAppernder";
import { valueSetter } from "../../../../helper/valueSetter";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Bell } from "react-feather";
import {
  coveFormStructure,
  formStructure,
  logoFormStructure,
} from "./formStructure";

const ComponyData = () => {
  const [submited, setSubmited] = useState(false);
  const [data, setData] = useState([]);
  const [formStructures, setFormStructures] = useState([]);
  const [profileImg, setProfileImg] = useState({});
  const [mainImg, setMainImg] = useState({});

  const token = useSelector((store) => store.token);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const getBasicComponyData = async (id) => {
    if (token._id) {
      const req = await getComponyData(token._id);
      if (req) {
        let valuesToSet = [
          { profileimage: req.result.profileimage },
          { componyname: req.result.componyname },
          { description: req.result.description },
          { componycity: req.result.componycity },
          { foundedDate: req.result.foundedDate },
          { componyname: req.result.componyname },
          { address: req.result.address },
          { workers: req.result.workers },
          { website: req.result.website },
          { field: req.result.field },
        ];
        valueSetter(setValue, valuesToSet);
        setData(req.result);
      }
    }
  };

  useEffect(() => {
    getBasicComponyData(token._id);
    const getFormStructure = (isRegisterd) => {
      const getter = formStructure(isRegisterd);
      setFormStructures(getter);
    };
    getFormStructure(data.isRegisteredCompletely);
  }, [data.isRegisteredCompletely, token]);

  const getDatepickerValue = (data, name) => {
    if (data.date === null) setValue(name, "");
    if (data.date !== null) setValue(name, data.persian);
  };

  const fillComponyInfoSubmitHandler = async (data) => {
    const formData = new FormData();
    profileImg && formData.append("profileimage", profileImg);
    mainImg && formData.append("mainImage", mainImg);

    let formDataMember = [
      { _id: token._id },
      { componyname: data.componyname },
      { field: data.field },
      { workers: data.workers },
      { description: data.description },
      { componycity: data.componycity },
      { address: data.address },
      { website: data.website },
      { foundedDate: data.foundedDate },
    ];

    valueAppender(formData, formDataMember);
    setData([]);
    await updateComponyData(formData);
    getBasicComponyData();
    setTimeout(() => {
      window.location.href = "http://localhost:3000/panel/compony";
    }, 1000);
  };

  const setValueToProfileImage = (e) => setProfileImg(e);
  const submitBtnClickHandler = () => setSubmited(true);
  const setValueToMainImage = (e) => setMainImg(e);

  return (
    <Row className="m-t-40 p-b-50">
      <Col xl="12">
        <Col xl="12" className="p-0">
          <Alert
            color={`${
              data.isRegisteredCompletely ? "success" : "danger"
            } d-flex align-items-center`}
          >
            <Bell className="text-white m-r-20" size={16} />
            <div>
              <p className="text-white">
                {data.isRegisteredCompletely
                  ? IS_FULL_INFORMATION
                  : NOT_COMPELETE_INFO}
              </p>
              {!data.isRegisteredCompletely && (
                <p className="text-white">{FILL_INFO_FA}</p>
              )}
            </div>
          </Alert>
          <Form onSubmit={handleSubmit(fillComponyInfoSubmitHandler)}>
            <Row>
              <Col xl="6" lg="6" md="12" sm="12" xs="12">
                <FormContainer
                  data={formStructures}
                  register={register}
                  errors={errors}
                  getDatepickerValue={getDatepickerValue}
                  submited={submited}
                />
              </Col>
              <Col xl="6" lg="6" md="12" sm="12" xs="12">
                <FileContainer
                  itemData={coveFormStructure}
                  data={data.mainImage}
                  setImage={setValueToMainImage}
                  square={true}
                />
                <FileContainer
                  itemData={logoFormStructure}
                  data={data.profileimage}
                  setImage={setValueToProfileImage}
                />
              </Col>
            </Row>
            <Button
              type="submit"
              color="primary"
              onClick={submitBtnClickHandler}
            >
              {SUBMIT_INFORMATION_FA}
            </Button>
          </Form>
        </Col>
      </Col>
      {data.length === 0 && <TotalPageLoader />}
    </Row>
  );
};

export default ComponyData;
