import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import Logo from "../../Images/Logo.png";
import { AiOutlineLeft, AiFillPlayCircle } from "react-icons/ai";
import { genreColors } from "../../data";

const SingleAnime = () => {
  const { id } = useParams();

  const mainUrl = `https://api.jikan.moe/v4/anime/${id}`;

  const [FetchedData, setFetchedData] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const getData = async (url) => {
    setisLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data) {
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
      rating,
      status,
      background,
      episodes,
      genres,
      aired,
      trailer,
      images: {
        jpg: { image_url },
      },
      synopsis,
      favorites,
    } = FetchedData;

    return (
      <div className="single-anime-container flex flex-col justify-between items-center w-full  mb-10">
        <div className="back-btn-container w-full mt-2">
          <Link to="/animes">
            <button className="btn sidebar-close-btn flex justify-between items-center truncate p-2 bg-zinc-700 hover:bg-yellow-500 hover:text-black duration-300 text-white  ml-2">
              <AiOutlineLeft /> Go Back
            </button>
          </Link>
        </div>

        <span className="sa-info-container-1 flex flex-col justify-between items-center w-2/5 text-5xl mb-10">
          {title || "title"}
        </span>

        <div className="sa-horizontal-info-container flex justify-around items-start w-full h-full mt-5">
          <div className="sa-img-container w-1/5 h-1/3 flex justify-center item-start">
            <img src={image_url || Logo} alt={title || "title"} />
          </div>

          <div className="sa-info-container-2 flex flex-col justify-between items-start w-2/5 ">
            <span className="sa-name-container mb-3">
              Name : {title || "title"}
            </span>

            <span className="sa-rating-container mb-3">
              rating :- {rating || "rating"}
            </span>

            <span className="sa-favourites-container mb-3">
              Votes : {favorites || "favs"}
            </span>

            <span className="sa-status-container mb-3">
              Status : {status || "status"}
            </span>

            <span className="sa-episodes-container mb-3">
              Episodes : {episodes || "episodes"}
            </span>

            <span className="sa-episodes-container mb-3">
              Rank : {rank || "episodes"}
            </span>

            <span className="sa-about-container mb-3 flex flex-col justify-between items-start">
              {background || null}
            </span>

            <span className="sa-about-container mb-3 flex flex-col justify-between items-start">
              Aired : {aired.string || null}
            </span>

            <span className="sa-genres-container mb-3">
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

            <span className="sa-about-container mb-3 flex flex-col justify-between items-start">
              {synopsis ? `${synopsis.substring(0, 400)}...` : null}
            </span>

            <a
              className="sa-trailer-btn btn  text-white bg-red-700 hover:bg-red-600 mr-5 cursor-pointer flex justify-between items-center  truncate"
              href={trailer.url}
            >
              Watch Trailer <AiFillPlayCircle />
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleAnime;
