import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../../CSS/Animes.css";
import { Link } from "react-router-dom";

const Animes = () => {
  const LastPage = 740;
  const [Page, setPage] = useState(1);
  const [FetchedData, setFetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [SearchValue, setSearchValue] = useState("");

  const mainUrl = `https://api.jikan.moe/v4/top/anime?page=${Page}`;
  const searchUrl = `https://api.jikan.moe/v4/anime?q=${SearchValue}`;

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
    if (SearchValue) {
      getData(searchUrl);
    } else {
      getData(mainUrl);
    }
  }, [searchUrl, mainUrl, SearchValue]);

  useEffect(() => {
    if (Page < 1) {
      setPage(LastPage - 1);
    }
    if (Page > LastPage - 1) {
      setPage(1);
    }
  }, [Page]);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return isLoading && FetchedData ? (
    <Loading />
  ) : (
    <div className="All-anime-page w-full">
      <h1 className="text-3xl text-yellow-500 p-5">All Top anime</h1>

      <div className="form-container flex flex-col justify-center items-center w-full">
        <form
          onSubmit={(e) => HandleSubmit(e)}
          className="w-1/2 flex justify-center items-center mb-5 search-form"
        >
          <label className="mr-5 text-2xl truncate">Search Here : </label>
          <input
            type="text"
            className="search-input-bar w-64"
            placeholder="Place a space after anime name "
            value={SearchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        {FetchedData && SearchValue ? (
          <span className="text-green-500">Item Found</span>
        ) : (
          <span className="text-red-600">Item Not Found</span>
        )}
      </div>
      {SearchValue ? null : (
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
      )}

      <div className="all-anime-block grid grid-cols-4 w-full">
        {!FetchedData ? (
          <Loading />
        ) : (
          FetchedData.map((item) => {
            const {
              mal_id,
              title,
              episodes,
              type,
              duration,
              images: {
                jpg: { image_url },
              },
            } = item;
            return (
              <Link key={mal_id} to={`/anime/${mal_id}`}>
                <div className="single-anime-block m-8  mb-14 cursor-pointer bg-zinc-800 p-4">
                  <div className="sa-img-container w-full">
                    <img src={image_url} alt={title} className="w-full" />
                  </div>
                  <div className="sa-info-container flex flex-col justify-between items-center w-full p-1 text-center">
                    <span className="text-lg">{title}</span>
                    <span className="text-sm">
                      Total Episodes : {episodes || 1} of {duration || "30 min"}
                    </span>
                    <span className="text-sm">{type || "TV"}</span>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      {SearchValue ? null : (
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
      )}
    </div>
  );
};

export default Animes;
