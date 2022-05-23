import React from "react";
import { genreColors, genres } from "../../data";

const SingleBlockTabAllGenres = ({ title }) => {
  return (
    <div className="single-block m-5 bg-zinc-700">
      <div className="block-heading text-2xl p-2 text-yellow-500">{title}</div>
      <div className="block-content-genres">
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
      </div>
    </div>
  );
};

export default SingleBlockTabAllGenres;
