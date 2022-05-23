import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import "../../CSS/MangaRecomendations.css";
import { Link } from "react-router-dom";

const MangaRecomendations = () => {
  const LastPage = 20;
  const [Page, setPage] = useState(1);
  const [FetchedData, setFetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const mainUrl = `https://api.jikan.moe/v4/recommendations/manga?page=${Page}`;

  const getData = async (url) => {
    setisLoading(false);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data);
      if (data) {
        setFetchedData(data.data);

        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(mainUrl);
  }, [mainUrl]);

  useEffect(() => {
    if (Page < 1) {
      setPage(LastPage - 1);
    }
    if (Page > LastPage - 1) {
      setPage(1);
    }
  }, [Page]);

  return isLoading && FetchedData ? (
    <Loading />
  ) : (
    <div className="All-anime-page w-full">
      <h1 className="text-3xl text-yellow-500 p-5">Manga Recomendations</h1>

      <div className="page-btns-container flex justify-center items-center w-full">
        <button
          className="page-left-btn btn p-2 bg-yellow-500 m-3 text-black text-2xl"
          onClick={() => setPage(Page - 1)}
        >
          <AiOutlineLeft />
        </button>
        <span className="page-no-info text-3xl">
          {Page} of {LastPage}
        </span>
        <button
          className="page-right-btn btn p-2 bg-yellow-500 m-3 text-black text-2xl"
          onClick={() => setPage(Page + 1)}
        >
          <AiOutlineRight />
        </button>
      </div>

      <div className="all-anime-block grid grid-cols-4 w-full">
        {!FetchedData ? (
          <Loading />
        ) : (
          FetchedData.map((item, index) => {
            const { entry } = item;

            const {
              title,
              mal_id,
              images: {
                jpg: { image_url },
              },
            } = entry[0];

            return (
              <Link key={index} to={`/manga/${mal_id}`}>
                <div className="single-anime-block m-8  mb-14 cursor-pointer bg-zinc-800 p-4">
                  <div className="sa-img-container w-full">
                    <img src={image_url} alt={title} className="w-full" />
                  </div>
                  <div className="sa-info-container flex flex-col justify-between items-center w-full p-1 text-center">
                    <span className="text-lg">{title}</span>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      <div className="page-btns-container flex justify-center items-center w-full">
        <button
          className="page-left-btn btn p-2 bg-yellow-500 m-3 text-black text-2xl"
          onClick={() => setPage(Page - 1)}
        >
          <AiOutlineLeft />
        </button>
        <span className="page-no-info text-3xl">
          {Page} of {LastPage}
        </span>
        <button
          className="page-right-btn btn p-2 bg-yellow-500 m-3 text-black text-2xl"
          onClick={() => setPage(Page + 1)}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default MangaRecomendations;
