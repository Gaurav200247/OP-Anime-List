import React from "react";

const About = () => {
  return (
    <div className="about-page w-full flex justify-center items-center">
      <div className="about-page-container w-1/2 flex flex-col justify-between items-center mt-10 mb-10 p-10">
        <div className="about-heading text-4xl text-yellow-500">About Me</div>

        <div className="underline bg-white w-3/12 mb-5 mt-1"></div>

        <div className="about-info flex flex-col justify-between items-center w-full text-center text-lg">
          <span>
            Welcome, to my{" "}
            <span className="text-3xl text-yellow-300">Op Anime List</span> App.{" "}
            <br />
            You can search your favourite Anime, Manga, Anime Character here and
            get to know about their details. Hope,You Enjoy my Project. <br />{" "}
            <br /> Thanks for using my App 😄
            <br /> <br />
          </span>
          <p className="info-end w-full text-center">
            Created By- <span className="creater-name">Gaurav Gupta</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
