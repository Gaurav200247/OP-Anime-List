import React from "react";
import { useDispatch } from "react-redux";

const ForgotPassForm = () => {
  const dispatch = useDispatch();

  const setFormType = (type) => {
    dispatch({
      type: "SetFormType",
      payload: type,
    });
  };

  return (
    <div className="fp-block mt-5 mb-5 bg-white text-black flex flex-col justify-between items-center">
      <h1 className="fp-block-heading w-full text-center mb-5 mt-5 text-xl">
        Forgot Password !!
      </h1>

      <form className="fp-form flex flex-col justify-between items-start">
        <div className="fp-input-tab p-1 mb-2">
          <label className="text-lg mr-3">E-mail : </label>
          <input
            type="email"
            placeholder="Enter E-mail here"
            required
            className="p-1 border-b-2 fp-inputs"
          />
        </div>

        <div className="fp-input-tab p-1  mb-2">
          <label className="text-lg mr-3">New Password : </label>
          <input
            type="password"
            placeholder="Enter Password here"
            required
            className="p-1 border-b-2 fp-inputs"
          />
        </div>

        <div className="fp-input-tab p-1  mb-5">
          <label className="text-lg mr-3">Re-Enter New Password : </label>
          <input
            type="password"
            placeholder="Enter Password here"
            required
            className="p-1 border-b-2 fp-inputs"
          />
        </div>

        <div className="fp-btn-container w-full mb-5">
          <button className="btn w-full p-3 bg-green-600 hover:bg-green-500 text-white">
            Change Password
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

export default ForgotPassForm;
