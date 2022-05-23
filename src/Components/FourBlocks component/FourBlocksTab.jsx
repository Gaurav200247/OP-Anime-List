import React from "react";
import SingleBlockTabAllGenres from "./SingleBlockTabAllGenres";
import SingleBlockTabCharacters from "./SingleBlockTabCharacters";
import SingleBlockTabRecomendation from "./SingleBlockTabRecomendation";

const FourBlocksTab = () => {
  return (
    <div className="all-blocks-container w-full flex justify-between items-start">
      <SingleBlockTabCharacters
        url={"https://api.jikan.moe/v4/top/characters"}
        title={"Top Characters"}
      />{" "}
      <SingleBlockTabRecomendation
        url={"https://api.jikan.moe/v4/recommendations/anime?page=5"}
        title={"Anime Recomendations"}
        route={"/animerecomendations"}
        singleroute={"/anime/"}
      />
      <SingleBlockTabRecomendation
        url={"https://api.jikan.moe/v4/recommendations/manga?page=5"}
        title={"Manga Recomendations"}
        route={"/mangarecomendations"}
        singleroute={"/manga/"}
      />
      <SingleBlockTabAllGenres title={"All Genres"} />
    </div>
  );
};

export default FourBlocksTab;
