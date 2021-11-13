import React, { useState } from "react";
import TotalPageLoader from "./../../../../shared/loader/totalPageLoader";
import FormContainer from "./../../../../shared/form/formContainer";
import Cookies from "universal-cookie";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { GitHub, Facebook, Twitter } from "react-feather";
import { formStructure } from "./formStructure";
import { loginCompony } from "./data";
import { withRouter } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  RememberPassword,
  DontHaveAccount,
  RedirectToHome,
  ForgotPassword,
  CreateAccount,
  SignIn,
} from "./../../../../constant";

const ComponyLogin = ({ history }) => {
  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successlogin, setSuccessLogin] = useState(false);

  const userLoginSubmitHandler = async (data) => {
    const response = await loginCompony({
      email: data.email,
      password: data.password,
    });
    if (response !== undefined && response.type !== "error") {
      cookies.set("u_t", response.data.data.token, {
        path: "/",
        maxAge: 50000000,
      });
      setSuccessLogin(true);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  };

  return (
    <div className="login-main login-tab">
      {successlogin && <TotalPageLoader />}
      <Form
        className="theme-form"
        onSubmit={handleSubmit(userLoginSubmitHandler)}
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
          <a className="link d-block m-b-20" href="#javascript">
            {ForgotPassword}
          </a>

          <Button color="primary" type="submit" className="btn-block">
            {successlogin ? <>{RedirectToHome}...</> : SignIn}
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
          {DontHaveAccount}
          <Link className="ml-2 link" to="/auth/compony/register">
            {CreateAccount}
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default withRouter(ComponyLogin);
