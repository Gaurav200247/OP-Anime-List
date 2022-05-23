import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "../../Images/Logo.png";
import { genreColors } from "../../data";

const SingleManga = () => {
  const { id } = useParams();

  const mainUrl = `https://api.jikan.moe/v4/manga/${id}`;

  const [FetchedData, setFetchedData] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const getData = async (url) => {
    setisLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data) {
        // console.log(data);
        setFetchedData(data.data);
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    getData(mainUrl);
  }, [mainUrl, id]);

  if (isLoading || !FetchedData) {
    return <Loading />;
  }

  if (FetchedData) {
    const {
      title,
      rank,
      authors,
      genres,
      status,
      images: {
        jpg: { image_url },
      },
      synopsis,
      favorites,
    } = FetchedData;

    return (
      <div className="single-manga-container flex flex-col justify-between items-center w-full  mb-10">
        <div className="back-btn-container w-full mt-2">
          <Link to="/manga">
            <button className="btn sidebar-close-btn flex justify-between items-center truncate p-2 bg-zinc-700 hover:bg-yellow-500 hover:text-black duration-300 text-white  ml-2">
              <AiOutlineLeft /> Go Back
            </button>
          </Link>
        </div>

        <span className="sm-info-container-1 flex flex-col justify-between items-center w-2/5 text-5xl mb-10">
          {title || "Name"}
        </span>

        <div className="sm-horizontal-info-container flex justify-around items-start w-full h-full mt-5">
          <div className="sm-img-container w-1/5 h-1/3 flex justify-center item-start">
            <img src={image_url || Logo} alt={title || "title"} />
          </div>

          <div className="sm-info-container-2 flex flex-col justify-between items-start w-2/5 ">
            <span className="sm-name-container mb-3">
              Title : {title || "title"}
            </span>

            <span className="sm-rank-container mb-3">
              Rank :- {rank || "rank"}
            </span>

            <span className="sm-favourites-container mb-3">
              Votes : {favorites || "favs"}
            </span>

            <span className="sm-status-container mb-3">
              Status : {status || "status"}
            </span>

            <span className="sm-authors-container mb-3">
              Author : {authors[0].name || "author"}
            </span>

            <span className="sm-genres-container mb-3">
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
            </span>

            <span className="sm-about-container mb-3 flex flex-col justify-between items-start">
              {synopsis || "about"}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleManga;
