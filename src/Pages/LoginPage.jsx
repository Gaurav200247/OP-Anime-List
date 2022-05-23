import React from "react";
import { useSelector } from "react-redux";
import ForgotPassForm from "../Components/Login Components/ForgotPassForm";
import LoginForm from "../Components/Login Components/LoginForm";
import SignUpForm from "../Components/Login Components/SignUpForm";
import "../CSS/LoginPage.css";

const LoginPage = () => {
  const { formType } = useSelector((state) => state.FormTypeReducer);

  return (
    <div className="login-page flex justify-center items-center w-full mt-10 mb-10">
      {formType === "login" && <LoginForm />}
      {formType === "signup" && <SignUpForm />}
      {formType === "forgotPass" && <ForgotPassForm />}
    </div>
  );
};

export default LoginPage;
