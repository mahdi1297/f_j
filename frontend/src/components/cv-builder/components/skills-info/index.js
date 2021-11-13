import React, { useEffect, useState } from "react";
import TypeheadContainer from "./../../../../shared/form/typehead";
import { getResumeData, submitSkillsDataToResume } from "./data";
import { Alert, Button, Card, Container, Form } from "reactstrap";
import { SINGIN_FOR_CREATE_RESUME_FA } from "../../../../constant/messages";
import { formStructure } from "./formStructure";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CvBuilderSkillsInfo = () => {
  const history = useHistory();

  const [resume, setResume] = useState({});
  const [skills, setSkills] = useState([]);

  const userData = useSelector((store) => store.token);

  const getUserResumeData = async (email) => {
    const request = await getResumeData(email);
    setResume(request);
    setSkills(request.skills);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getUserResumeData(userData.email);
  }, [userData.email]);

  const skillsSubmitHandler = async (data) => {
    const overrideData = {
      email: userData.email,
      skills: skills,
    };
    await submitSkillsDataToResume(history, overrideData);
    getUserResumeData(userData.email);
  };

  return (
    <>
      <Container className="m-t-40">
        {resume !== null ? (
          <Card className="p-3">
            <h2 className="f-18 f-w-500 m-b-30">
              {formStructure.skillsForm.title}
            </h2>
            <Form
              className="theme-form"
              onSubmit={handleSubmit(skillsSubmitHandler)}
            >
              {resume && resume.skills && (
                <TypeheadContainer
                  itemData={formStructure.skillsForm.form}
                  register={register}
                  errors={errors}
                  typeheadDefaults={resume.skills}
                  setData={setSkills}
                />
              )}
              <div className="d-flex justify-content-end m-t-30">
                <Button type="submit" color="primary" size="md">
                  ثبت اطلاعات
                </Button>
              </div>
            </Form>
          </Card>
        ) : (
          <Alert color="warning">
            <p className="f-18 text-dark">{SINGIN_FOR_CREATE_RESUME_FA}</p>
            <p className="f-16">
              <Link to="/auth/user/register">ثبت نام در سامانه....</Link>
            </p>
          </Alert>
        )}
      </Container>
    </>
  );
};

export default CvBuilderSkillsInfo;
