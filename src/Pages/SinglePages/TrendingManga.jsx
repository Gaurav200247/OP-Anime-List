import React from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import { AiOutlineLeft } from "react-icons/ai";
import { TrendingMangaData } from "../../TrendingMangaData";

const TrendingAnime = () => {
  const { id } = useParams();

  const { attributes } = TrendingMangaData[id];

  const {
    synopsis,
    canonicalTitle,
    favoritesCount,
    popularityRank,
    startDate,
    serialization,
    posterImage: { original },
  } = attributes;

  // console.log(TrendingMangaData[id]);

  return (
    <div className="single-anime-container flex flex-col justify-between items-center w-full  mb-10">
      <div className="back-btn-container w-full mt-2">
        <Link to="/">
          <button className="btn sidebar-close-btn flex justify-between items-center truncate p-2 bg-zinc-700 hover:bg-yellow-500 hover:text-black duration-300 text-white  ml-2">
            <AiOutlineLeft /> Go Back
          </button>
        </Link>
      </div>

      <span className="sa-info-container-1 flex flex-col justify-between items-center w-2/5 text-5xl mb-10">
        {canonicalTitle || "title"}
      </span>

      <div className="sa-horizontal-info-container flex justify-around items-start w-full h-full mt-5">
        <div className="sa-img-container w-1/5 h-1/3 flex justify-center item-start">
          <img src={original || Logo} alt={canonicalTitle || "title"} />
        </div>

        <div className="sa-info-container-2 flex flex-col justify-between items-start w-2/5 ">
          <span className="sa-name-container mb-3">
            Name : {canonicalTitle || "title"}
          </span>

          <span className="sa-favourites-container mb-3">
            Votes : {favoritesCount || "favs"}
          </span>

          <span className="sa-serialization-container mb-3">
            Serialization : {serialization || ""}
          </span>

          <span className="sa-episodes-container mb-3">
            Rank : {popularityRank || "episodes"}
          </span>

          <span className="sa-about-container mb-3 flex flex-col justify-between items-start">
            Aired : {startDate || null}
          </span>

          <span className="sa-about-container mb-3 flex flex-col justify-between items-start">
            {`${synopsis.substring(0, 400)}...` || "synopsis"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingAnime;
