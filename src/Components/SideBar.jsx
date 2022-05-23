import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { genreColors, genres, SideBar_links } from "../data";
import "../CSS/SideBar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const { isSideBar } = useSelector((state) => state.SideBarReducer);

  const CloseSideBar = () => {
    dispatch({
      type: "CloseSideBar",
    });
  };

  return (
    <div
      className={`SideBar-container ${
        isSideBar ? "show-sidebar" : null
      } flex flex-col justify-between items-start w-72 bg-zinc-700`}
    >
      {/* ----------------------------------------------------------- */}
      <div className="sidebar-close-btn-container w-full mt-2">
        <button
          className="btn sidebar-close-btn flex justify-between items-center truncate p-2 bg-zinc-700 hover:bg-slate-800 duration-300 text-white hover:text-yellow-500 ml-2"
          onClick={() => CloseSideBar()}
        >
          <AiOutlineLeft /> Close Menu
        </button>
      </div>
      {/* ----------------------------------------------------------- */}

      <div className="sidebar-links-container flex flex-col justify-between items-start w-full mt-2">
        {SideBar_links.map((item, index) => {
          const { name, path } = item;
          return (
            <Link
              to={`${path}`}
              key={index}
              className="sidebar-link p-3 w-full cursor-pointer hover:bg-slate-800 duration-300"
            >
              {name}
            </Link>
          );
        })}
      </div>
      {/* ----------------------------------------------------------- */}

      <div className="genre-container flex justify-between flex-wrap w-full mt-2">
        {genres.map((item, index) => {
          const { mal_id, name, url } = item;
          return (
            <a
              key={mal_id}
              href={url}
              className="genre-links m-2 text-sm w-1/3 truncate duration-300"
              style={{ color: genreColors[index] }}
            >
              {name}
            </a>
          );
        })}
      </div>
      {/* ----------------------------------------------------------- */}
    </div>
  );
};

export default SideBar;
