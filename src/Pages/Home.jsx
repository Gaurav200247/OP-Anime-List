import React from "react";
import Slider from "../Components/Slider";
import HorizontalSnap from "../Components/HorizontalSnap";
import FourBlocksTab from "../Components/FourBlocks component/FourBlocksTab";
import { useSelector } from "react-redux";
import NavSearchedAnimeList from "./NavSearchedAnimeList";

const Home = () => {
  const { SearchedData } = useSelector((state) => state.NavSeachReducer);

  return (
    <>
      {SearchedData.length > 0 ? <NavSearchedAnimeList /> : null}
      <Slider
        url={"https://kitsu.io/api/edge/trending/anime"}
        route={"/trendinganime/"}
      />
      <HorizontalSnap
        url={"https://kitsu.io/api/edge/trending/anime"}
        title={"Trending Anime"}
        route={"/trendinganime/"}
      />
      <FourBlocksTab />
      <HorizontalSnap
        url={"https://kitsu.io/api/edge/trending/manga"}
        title={"Trending Manga"}
        route={"/trendingmanga/"}
      />
    </>
  );
};

export default Home;
