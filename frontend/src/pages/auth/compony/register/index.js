import React, { useState } from "react";
import TotalPageLoader from "./../../../../shared/loader/totalPageLoader";
import FormContainer from "./../../../../shared/form/formContainer";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { GitHub, Facebook, Twitter } from "react-feather";
import { registerCompony } from "./data";
import { formStructure } from "./formStructure";
import { withRouter } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  RememberPassword,
  LoginToAccount,
  HaveAccount,
  RegisterIn,
  RedirectToLogin,
} from "./../../../../constant";

const ComponyRegister = ({ history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successRegister, setSuccessRegister] = useState(false);

  const userRegisterSubmitHandler = async (data) => {
    const response = await registerCompony(data);
    if (response !== undefined && response === "ok") {
      setSuccessRegister(true);
      setTimeout(() => {
        history.push("/auth/compony/login");
      }, 2000);
    }
  };

  return (
    <div className="login-main login-tab">
      {successRegister && <TotalPageLoader />}
      <Form
        className="theme-form"
        onSubmit={handleSubmit(userRegisterSubmitHandler)}
      >
        <FormContainer
          data={formStructure}
          register={register}
          errors={errors}
        />
        <FormGroup className="mb-0">
          <div className="checkbox ml-3">
            <Input id="checkbox1" type="checkbox" />
            <Label className="text-muted" for="checkbox1">
              {RememberPassword}
            </Label>
          </div>

          <Button color="primary" type="submit" className="btn-block">
            {successRegister ? <>{RedirectToLogin}...</> : RegisterIn}
          </Button>
        </FormGroup>
        <div className="social mt-4">
          <div className="btn-showcase">
            <Button color="light">
              <Facebook className="txt-fb" />
            </Button>
            <Button color="light">
              <Twitter className="txt-twitter" />
            </Button>
            <Button color="light">
              <GitHub />
            </Button>
          </div>
        </div>
        <p className="mt-4 mb-0">
          {HaveAccount}
          <Link className="ml-2 link" to="/auth/compony/login">
            {LoginToAccount}
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default withRouter(ComponyRegister);
