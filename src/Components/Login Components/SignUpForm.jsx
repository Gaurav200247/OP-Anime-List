import React from "react";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const setFormType = (type) => {
    dispatch({
      type: "SetFormType",
      payload: type,
    });
  };

  return (
    <div className="signup-block mt-5 mb-5 bg-white text-black flex flex-col justify-between items-center">
      <h1 className="signup-block-heading w-full text-center mb-5 mt-5 text-xl">
        Sign Up
      </h1>

      <form className="signup-form flex flex-col justify-between items-start">
        <div className="signup-input-tab p-1 mb-2">
          <label className="text-lg mr-3">Username : </label>
          <input
            type="text"
            placeholder="Enter E-mail here"
            required
            className="p-1 border-b-2 signup-inputs"
          />
        </div>

        <div className="signup-input-tab p-1 mb-2">
          <label className="text-lg mr-3">E-mail : </label>
          <input
            type="email"
            placeholder="Enter E-mail here"
            required
            className="p-1 border-b-2 signup-inputs"
          />
        </div>

        <div className="signup-input-tab p-1  mb-2">
          <label className="text-lg mr-3">Password : </label>
          <input
            type="password"
            placeholder="Enter Password here"
            required
            className="p-1 border-b-2 signup-inputs"
          />
        </div>

        <div className="signup-input-tab p-1  mb-5">
          <label className="text-lg mr-3">Re-Enter Password : </label>
          <input
            type="password"
            placeholder="Enter Password here"
            required
            className="p-1 border-b-2 signup-inputs"
          />
        </div>

        <div className="signup-btn-container w-full mb-5">
          <button className="btn w-full p-3 bg-green-600 hover:bg-green-500 text-white">
            Register
          </button>
        </div>
      </form>

      <div className="underline bg-black w-2/3 mb-2"></div>

      <div className="sign-up-btn-container mb-5">
        Back to{" "}
        <button className="text-blue-500" onClick={() => setFormType("login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
