import React, { useState } from "react";
import { FaBars, FaRandom } from "react-icons/fa";
import { MediaIcons } from "../../data";
// import Logo from "../Images/Logo.png";
import SearchBar from "./SearchBar";
import "../../CSS/NavBar.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const [RandomNumber, setRandomNumber] = useState(40);

  const OpenSideBar = () => {
    dispatch({
      type: "OpenSideBar",
    });
  };

  const getRandomNumber = () => {
    let rand = Math.ceil(Math.random() * 500 + 10);
    // console.log(rand);
    setRandomNumber(rand);
  };

  return (
    <nav className="flex justify-between items-center  w-full">
      <div className="sidebar-btn-container flex justify-center items-center cursor-pointer text-3xl">
        <FaBars onClick={() => OpenSideBar()} className="sidebar-btn" />
      </div>

      <div className="logo-container w-2/12 flex justify-center items-center cursor-pointer text-center text-2xl ">
        <Link to="/">
          <span className="w-full text-center truncate">
            <span className="text-yellow-500  text-2xl ml-2">OP </span>
            Anime List
          </span>
        </Link>
      </div>

      <div className="searchBar-container w-3/12">
        <SearchBar />
      </div>

      <div className="follow-links-container w-3/12 flex justify-around items-center">
        {MediaIcons.map((item, index) => {
          const { icon, color, link } = item;
          return (
            <a
              key={index}
              href={link}
              className="text-3xl  duration-300 media-icons"
              style={{ color: `${color}` }}
            >
              {icon}
            </a>
          );
        })}
      </div>

      <Link
        to={`/characters/${RandomNumber}`}
        className="w-1/12"
        onClick={() => getRandomNumber()}
      >
        <div className="random-btn-container text-yellow-500  flex flex-col justify-center items-center cursor-pointer">
          <FaRandom /> Random
        </div>
      </Link>

      <div className="login-btn-container w-1/12">
        <Link
          to="/register"
          className="login-btn btn p-2 bg-yellow-500 text-black"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
