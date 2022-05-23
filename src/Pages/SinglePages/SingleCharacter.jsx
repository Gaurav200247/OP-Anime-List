import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { AiOutlineLeft } from "react-icons/ai";
import Logo from "../../Images/Logo.png";

const SingleCharacter = () => {
  const { id } = useParams();

  const mainUrl = `https://api.jikan.moe/v4/characters/${id}`;

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
      name,
      nicknames,
      images: {
        jpg: { image_url },
      },
      about,
      favorites,
    } = FetchedData;

    return (
      <div className="single-character-container flex flex-col justify-between items-center w-full  mb-10">
        <div className="back-btn-container w-full mt-2">
          <Link to="/characters">
            <button className="btn sidebar-close-btn flex justify-between items-center truncate p-2 bg-zinc-700 hover:bg-yellow-500 hover:text-black duration-300 text-white  ml-2">
              <AiOutlineLeft /> Go Back
            </button>
          </Link>
        </div>

        <span className="sc-info-container-1 flex flex-col justify-between items-center w-2/5 text-5xl mb-10">
          {name || "Name"}
        </span>

        <div className="sc-horizontal-info-container flex justify-around items-start w-full h-full mt-5">
          <div className="sc-img-container w-1/5 h-1/3 flex justify-center item-start">
            <img src={image_url || Logo} alt={name || "Name"} />
          </div>

          <div className="sc-info-container-2 flex flex-col justify-between items-start w-2/5 ">
            <span className="sc-name-container mb-3">
              Name : {name || "name"}
            </span>

            <span className="sc-nickname-container mb-3">
              Nicknames :- {nicknames || "nickname"}
            </span>

            <span className="sc-favourites-container mb-3">
              Votes : {favorites || "favs"}
            </span>

            <span className="sc-about-container mb-3 flex flex-col justify-between items-start">
              {about.split("\n").map((item, index) => {
                // console.log(item);
                return (
                  <span key={index} className="mb-2">
                    {item.length > 450 ? `${item.substring(0, 450)}...` : item}
                  </span>
                );
              }) || "about"}
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleCharacter;
