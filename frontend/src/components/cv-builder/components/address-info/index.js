/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FormContainer from "../../../../shared/form/formContainer";
import { getResumeData, submitAddressDataToResume } from "./data";
import { formStructure } from "./formStructure";
import { Alert, Button, Card, Container } from "reactstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CvBuilderAddressInfo = () => {
  const history = useHistory();

  const [resume, setResume] = useState({});

  const userData = useSelector((store) => store.token);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const getUserResumeData = async (email) => {
    const request = await getResumeData(email);
    if (request !== null) {
      setValue("city", request.city);
      setValue("province", request.province);
      setValue("address", request.address);
    }
    setResume(request);
  };

  useEffect(() => {
    getUserResumeData(userData.email);
    return () => {
      setResume({});
    };
  }, [userData.email]);

  const cvSubmitAddressInfo = async (data) => {
    const overrideData = {
      email: userData.email,
      city: data.city,
      province: data.province,
      address: data.address,
    };
    await submitAddressDataToResume(history, overrideData);
    getUserResumeData(userData.email);
  };

  return (
    <Container className="m-t-40">
      {resume !== null ? (
        <Card className="p-3">
          <form onSubmit={handleSubmit(cvSubmitAddressInfo)}>
            <h2 className="f-18 f-w-500">
              {formStructure.addressInformation.title}
            </h2>
            <FormContainer
              data={formStructure.addressInformation.form}
              register={register}
              errors={errors}
            />
            <div className="d-flex justify-content-end m-t-30">
              <Button type="submit" color="primary" size="md">
                ثبت
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Alert color="warning">
          <p className="f-18 text-dark">
            برای ساخت رزومه ابتدا در سامانه ثبت نام کنید
          </p>
          <p className="f-16">
            <Link to="/auth/user/register">ثبت نام در سامانه....</Link>
          </p>
        </Alert>
      )}
    </Container>
  );
};

export default CvBuilderAddressInfo;
