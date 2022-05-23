import React from "react";
import "../CSS/Loading.css";

const Loading = () => {
  return (
    <div className="loader-container flex justify-center items-center m-10 ">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
