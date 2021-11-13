/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import FormContainer from "./../../../../shared/form/formContainer";
import { getResumeData, submitPersonalDataToResume } from "./data";
import { Alert, Button, Card, Container } from "reactstrap";
import { formStructure } from "./formStructure";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CvBuilderPersonalInfo = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [resume, setResume] = useState({});
  const userData = useSelector((store) => store.token);

  const getUserResumeData = async (email) => {
    if (email) {
      const request = await getResumeData(email);
      if (request !== null) {
        setValue("name", request.name);
        setValue("lastname", request.lastname);
        setValue("email", request.email);
        setValue("phone", request.phone);
        setValue("mariadgestatus", request.mariadgestatus);
        setValue("sex", request.sex);
        setValue("aboutuser", request.aboutuser);
      }
      setResume(request);
    }
  };

  useEffect(() => {
    getUserResumeData(userData.email);
    return () => {
      setResume({});
    };
  }, [userData.email]);

  const cvSubmitHandler = async (data) => {
    const overrideData = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      mariadgestatus: data.mariadgestatus,
      sex: data.sex,
      aboutuser: data.aboutuser,
    };
    await submitPersonalDataToResume(history, overrideData);
    getUserResumeData(userData.email);
  };

  return (
    <>
      <Container className="m-t-40">
        {resume !== null ? (
          <Card className="p-3">
            <form onSubmit={handleSubmit(cvSubmitHandler)}>
              <h2 className="f-18 f-w-500">
                {formStructure.personalDataForm.title}
              </h2>
              <FormContainer
                data={formStructure.personalDataForm.form}
                register={register}
                errors={errors}
              />
              <div className="d-flex justify-content-end m-t-30">
                <Button type="submit" color="primary" size="md">
                  ثبت اطلاعات
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
    </>
  );
};

export default CvBuilderPersonalInfo;
