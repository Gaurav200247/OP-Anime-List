import React from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar Component/NavBar";
import SideBar from "./Components/SideBar.jsx";

import Home from "./Pages/Home";
import About from "./Pages/About";

import Manga from "./Pages/ListPages/Manga";
import Characters from "./Pages/ListPages/Characters";

import SingleCharacter from "./Pages/SinglePages/SingleCharacter";
import SingleAnime from "./Pages/SinglePages/SingleAnime";
import SingleManga from "./Pages/SinglePages/SingleManga";

import Footer from "./Components/Footer";
import Animes from "./Pages/ListPages/Animes";
import MangaRecomendations from "./Pages/ListPages/MangaRecomendations";
import AnimeRecomendations from "./Pages/ListPages/AnimeRecomendations";

import TrendingAnime from "./Pages/SinglePages/TrendingAnime";
import TrendingManga from "./Pages/SinglePages/TrendingManga";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/animerecomendations" element={<AnimeRecomendations />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/mangarecomendations" element={<MangaRecomendations />} />
        <Route path="/characters" element={<Characters />} />

        <Route path="/about" element={<About />} />

        <Route path="/anime/:id" element={<SingleAnime />} />
        <Route path="/manga/:id" element={<SingleManga />} />
        <Route path="/characters/:id" element={<SingleCharacter />} />
        <Route path="/trendinganime/:id" element={<TrendingAnime />} />
        <Route path="/trendingmanga/:id" element={<TrendingManga />} />

        <Route path="/register" element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
