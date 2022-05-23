import React from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const setFormType = (type) => {
    dispatch({
      type: "SetFormType",
      payload: type,
    });
  };

  return (
    <div className="login-block mt-5 mb-5 bg-white text-black flex flex-col justify-between items-center">
      <h1 className="login-block-heading w-full text-center mb-5 mt-5 text-xl">
        LOGIN
      </h1>

      <form className="login-form flex flex-col justify-between items-start">
        <div className="login-input-tab p-1 mb-2">
          <label className="text-lg mr-3">E-mail : </label>
          <input
            type="email"
            placeholder="Enter E-mail here"
            required
            className="p-1 border-b-2 login-inputs"
          />
        </div>

        <div className="login-input-tab p-1  mb-5">
          <label className="text-lg mr-3">Password : </label>
          <input
            type="password"
            placeholder="Enter Password here"
            required
            className="p-1 border-b-2 login-inputs"
          />
        </div>

        <div className="remem-me-tab p-1  mb-5">
          <input type="checkbox" /> Remember Me ?
        </div>

        <div className="login-btn-container w-full mb-5">
          <button className="btn w-full p-3 bg-green-600 hover:bg-green-500 text-white">
            Log In
          </button>
        </div>
      </form>

      <div className="underline bg-black w-2/3 mb-2"></div>

      <div className="forgot-pass-btn-container flex justify-end items-center w-2/3 mb-5">
        <button
          className="forgot-pass-btn text-pink-600"
          onClick={() => setFormType("forgotPass")}
        >
          Forgot Password ?
        </button>
      </div>

      <div className="sign-up-btn-container mb-5">
        Need an account ?{" "}
        <button className="text-blue-500" onClick={() => setFormType("signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
