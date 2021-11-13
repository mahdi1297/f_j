import React, { useEffect, useState } from "react";
import UniversityItem from "./universityItem";
import FormContainer from "./../../../../../../shared/form/formContainer";
import { getResumeData, SubmitEducationDataToResume } from "./data";
import { Button, Card, Col, Container } from "reactstrap";
import { formStructure } from "./formStructure";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { useForm } from "react-hook-form";
import { Plus } from "react-feather";

export const CvBuilderEducationExperienceInfo = ({ history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showEducations, setShowEducations] = useState(false);
  const [stillEducating, setStillEducating] = useState(false);
  const [formStructures, setFormStructures] = useState({});
  const [educatedItem, setEducatedItem] = useState([]);

  const token = useSelector((store) => store.token);

  const hideEducationHandler = () => setShowEducations(false);
  const showEducationHandler = () => setShowEducations(true);
  const valueGetter = (l, m, isChcked) => setStillEducating(isChcked);

  useEffect(() => {
    const form = formStructure(stillEducating);
    setFormStructures(form);
    getCurrentResumeData(token.email);
  }, [stillEducating, token.email]);

  const getCurrentResumeData = async (email) => {
    const request = await getResumeData(email);
    if (request.educationinfo) {
      const education = request.educationinfo;
      education.shift();
      setEducatedItem(education);
    }
  };

  const educationSubmitHandler = async (data, e) => {
    const formData = {
      _id: uuidv4(),
      education_end_date: data.education_end_date,
      education_experience_desc: data.education_experience_desc,
      education_feild: data.education_feild,
      education_level: data.education_level,
      education_start_date: data.education_start_date,
      still_student: stillEducating,
      university: data.university,
    };
    if (!formData) return;

    await SubmitEducationDataToResume(history, formData, token.email);
    getCurrentResumeData(token.email);
    e.target.reset();
    reset();
  };

  return (
    <Container className="m-t-40">
      <Card className="p-3">
        <h2 className="f-18 f-w-500 d-flex justify-content-between align-items-center">
          {formStructures.education && formStructures.education.title}
          <Plus
            size={20}
            onClick={showEducationHandler}
            style={{ cursor: "pointer" }}
          />
        </h2>
        {showEducations &&
          formStructures.education &&
          formStructures.education.form && (
            <form onSubmit={handleSubmit(educationSubmitHandler)}>
              <FormContainer
                data={formStructures.education.form}
                register={register}
                errors={errors}
                valueGetter={valueGetter}
              />
              <Col xl="12" className="p-0 m-t-20 d-flex justify-content-end">
                <Button
                  color="danger"
                  type="button"
                  onClick={hideEducationHandler}
                >
                  بستن
                </Button>
                <Button color="primary" className="m-l-20">
                  ثبت
                </Button>
              </Col>
            </form>
          )}
        <UniversityItem educatedItem={educatedItem} />
      </Card>
    </Container>
  );
};

export default withRouter(CvBuilderEducationExperienceInfo);
