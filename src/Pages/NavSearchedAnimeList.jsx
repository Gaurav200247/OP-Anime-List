import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavSearchedAnimeList = () => {
  const { SearchedData } = useSelector((state) => state.NavSeachReducer);
  return (
    <div className="searched-anime-page w-full">
      <h1 className="text-3xl text-yellow-500 p-5">Searched Anime Results </h1>
      <div className="sr-container grid grid-cols-4 w-full">
        {SearchedData.map((item) => {
          const {
            mal_id,
            title,
            episodes,
            type,
            duration,
            images: {
              jpg: { image_url },
            },
          } = item;
          return (
            <Link key={mal_id} to={`/anime/${mal_id}`}>
              <div className="single-anime-block m-8  mb-14 cursor-pointer bg-zinc-800 p-4">
                <div className="sa-img-container w-full">
                  <img src={image_url} alt={title} className="w-full" />
                </div>
                <div className="sa-info-container flex flex-col justify-between items-center w-full p-1 text-center">
                  <span className="text-lg">{title}</span>
                  <span className="text-sm">
                    Total Episodes : {episodes || 1} of {duration || "30 min"}
                  </span>
                  <span className="text-sm">{type || "TV"}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavSearchedAnimeList;
