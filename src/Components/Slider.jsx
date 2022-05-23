import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillPlayCircle,
} from "react-icons/ai";
import { BsClock, BsCalendarEvent } from "react-icons/bs";
import "../CSS/Slider.css";
import { Link } from "react-router-dom";

const Slider = ({ url, route }) => {
  const [FetchedData, setFetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [index, setindex] = useState(0);

  useEffect(() => {
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

    getData(url);
  }, [url]);

  useEffect(() => {
    let lastIndex = FetchedData.length - 1;
    if (index < 0) {
      setindex(lastIndex);
    }
    if (index > lastIndex) {
      setindex(0);
    }
  }, [index, FetchedData]);

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setindex(index + 1);
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, [index]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="anime-slider-container w-full">
      {/* -------------------------------------------- */}
      <div className="slider-container flex justify-between items-center p-3 w-full">
        {!FetchedData ? (
          <Loading />
        ) : (
          FetchedData.map((item, SlideIndex) => {
            const { id, attributes } = item;
            const {
              synopsis,
              titles: { en },
              posterImage: { large },
              coverImage: { original },
              episodeLength,
              youtubeVideoId,
              showType,
              canonicalTitle,
              startDate,
            } = attributes;

            let elementPosition = "next-slide";
            if (SlideIndex === index) {
              elementPosition = "active-slide";
            }
            if (
              SlideIndex === index - 1 ||
              (index === 0 && SlideIndex === FetchedData.length - 1)
            ) {
              elementPosition = "prev-slide";
            }

            return (
              <div
                key={id}
                className={`single-slider-block flex  justify-around items-center ${elementPosition}`}
                style={{
                  backgroundImage: `url("${original}")`,
                  objectFit: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {/* ////////////////////////////////////////////// */}
                <div className="h-full w-full bg-filter flex  justify-around items-center">
                  {/* ////////////////////////////////////////////// */}
                  <div className="slider-info-container w-2/5  flex flex-col justify-center items-start">
                    <div className="spotlight-container text-yellow-500 text-2xl mb-2  truncate">
                      # {SlideIndex + 1} Spotlight
                    </div>

                    <div className="name-container text-4xl mb-5">
                      {en || canonicalTitle}
                    </div>

                    <div className="middle-info-container text-lg  mb-3 w-full flex justify-between items-center">
                      <span className="flex justify-start items-center mi-blocks truncate">
                        <BsClock className="mr-2" /> {episodeLength || 24} min
                      </span>
                      <span className="text-yellow-500 flex justify-start items-center mi-blocks truncate">
                        <AiFillPlayCircle className="mr-2" /> {showType || "TV"}
                      </span>
                      <span className="flex justify-start items-center mi-blocks truncate">
                        <BsCalendarEvent className="mr-2" /> {startDate}
                      </span>
                    </div>

                    <div className="synopsis-container text-sm mb-5 mt-1">
                      {synopsis.substring(0, 400)}...
                    </div>

                    <div className="trailer-btn-container  mt-5 w-3/5 flex justify-start items-center">
                      <a
                        className="trailer-btn btn text-white bg-red-700 hover:bg-red-600 mr-5 cursor-pointer flex justify-between items-center  truncate"
                        href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
                      >
                        Watch Trailer <AiFillPlayCircle />
                      </a>
                      <Link
                        to={`${route}${SlideIndex}`}
                        className="details-btn btn text-white bg-slate-700 hover:bg-zinc-600 cursor-pointer flex justify-between items-center truncate"
                      >
                        Details <AiOutlineRight />
                      </Link>
                    </div>
                  </div>
                  {/* ////////////////////////////////////////////// */}

                  <div className="slider-thumbnail-container w-2/5 flex justify-center items-center">
                    <img src={large} alt={en} className="w-2/4 thumnail-img" />
                  </div>

                  {/* ////////////////////////////////////////////// */}
                  {/* ////////////////////////////////////////////// */}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* -------------------------------------------- */}
      <div className="slider-btn-container flex justify-between items-center flex-col">
        <button
          className="btn slider-btn bg-yellow-600 text-black hover:bg-yellow-500 "
          onClick={() => setindex(index + 1)}
        >
          <AiOutlineRight />
        </button>{" "}
        <button
          className="btn slider-btn bg-yellow-600 text-black hover:bg-yellow-500 "
          onClick={() => setindex(index - 1)}
        >
          <AiOutlineLeft />
        </button>
      </div>
      {/* -------------------------------------------- */}
    </div>
  );
};

export default Slider;
