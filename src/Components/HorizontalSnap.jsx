import React, { useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../CSS/HorizontalSnap.css";
import { Link } from "react-router-dom";

const HorizontalSnap = ({ url, title, route }) => {
  const [FetchedData, setFetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const RefContainer = useRef(null);

  const slide = (str) => {
    // console.log(RefContainer.current);
    if (str === "right") {
      RefContainer.current.scrollLeft += 230;
    }
    if (str === "left") {
      RefContainer.current.scrollLeft += -230;
    }
  };

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

  return isLoading ? (
    <Loading />
  ) : (
    <div className="anime-snap-container w-full p-2 mb-10 mt-5">
      <div className="snap-heading-container text-3xl pt-3 pb-3">{title}</div>
      {/* -------------------------------------------- */}
      <div
        className="snap-container flex justify-between items-center w-full"
        ref={RefContainer}
      >
        {!FetchedData ? (
          <Loading />
        ) : (
          FetchedData.map((item, index) => {
            const { id, attributes } = item;
            const {
              titles: { en },
              posterImage: { original },
              canonicalTitle,
            } = attributes;

            return (
              <Link
                to={`${route}${index}`}
                key={id}
                className="single-snap-block flex flex-col justify-center items-center pt-3 pr-3 pl-3 bg-zinc-700 cursor-pointer hover:bg-zinc-800"
              >
                <div className="snap-img-container w-full">
                  <img
                    src={original}
                    alt={en || canonicalTitle}
                    className="snap-img"
                  />
                </div>
                <div className="snap-info-container w-full mt-2  flex justify-start items-center truncate">
                  {en || canonicalTitle}
                </div>
              </Link>
            );
          })
        )}
      </div>

      {/* -------------------------------------------- */}
      <div className="snap-btn-container flex justify-around items-center flex-col">
        <button
          className="btn snap-btn bg-yellow-600 text-black text-lg hover:bg-yellow-500 "
          onClick={() => slide("right")}
        >
          <AiOutlineRight />
        </button>{" "}
        <button
          className="btn snap-btn bg-yellow-600 text-black text-lg hover:bg-yellow-500 "
          onClick={() => slide("left")}
        >
          <AiOutlineLeft />
        </button>
      </div>
      {/* -------------------------------------------- */}
    </div>
  );
};

export default HorizontalSnap;
