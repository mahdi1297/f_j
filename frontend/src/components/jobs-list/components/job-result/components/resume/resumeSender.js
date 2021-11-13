import React from "react";
import InputContainer from "./../../../../../../shared/form/input";
import { formStructure } from "./formStructure";
import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import "./../../style.css";

const JobResultResume = ({ setResumeWindow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resumeSendSubmitHandler = (data) => console.log(data);
  const cancelSendResumeHandler = () => setResumeWindow(false);

  return (
    <>
      <div className="requme-modal-container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/877/039/large_2x/cartoon-illustration-of-winged-flying-envelope-free-vector.jpg"
          alt=""
          width="100%"
        />

        <h1 className="f-22">ارسال رزومه</h1>
        <form onSubmit={handleSubmit(resumeSendSubmitHandler)}>
          {formStructure.fields.map((item) => (
            <InputContainer
              key={item.id}
              itemData={item}
              register={{
                ...register(item.name, { required: item.validation.required }),
              }}
              error={errors[item.name]}
            />
          ))}
          <div className="d-flex justify-content-between p-3 m-t-20">
            <Button
              color="secondary"
              type="button"
              onClick={cancelSendResumeHandler}
            >
              انصراف
            </Button>
            <Button color="primary" type="submit">
              ارسال رزومه
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobResultResume;
