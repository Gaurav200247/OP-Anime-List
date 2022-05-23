import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../../CSS/Characters.css";
import { Link } from "react-router-dom";

const Characters = () => {
  const LastPage = 2500;
  const [Page, setPage] = useState(1);
  const [FetchedData, setFetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [SearchValue, setSearchValue] = useState("");

  const mainUrl = `https://api.jikan.moe/v4/top/characters?page=${Page}`;
  const searchUrl = `https://api.jikan.moe/v4/characters?q=${SearchValue}`;

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
    <div className="All-characters-page w-full">
      <h1 className="text-3xl text-yellow-500 p-5">All Top Characters</h1>

      <div className="form-container flex flex-col justify-center items-center w-full">
        <form
          onSubmit={(e) => HandleSubmit(e)}
          className="w-1/2 flex justify-center items-center mb-5 search-form"
        >
          <label className="mr-5 text-2xl truncate">Search Here : </label>
          <input
            type="text"
            className="search-input-bar w-64"
            placeholder="Place a space after character name "
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

      <div className="all-characters-block flex flex-wrap justify-center items-center w-full">
        {!FetchedData ? (
          <Loading />
        ) : (
          FetchedData.map((item) => {
            const {
              mal_id,
              name,
              images: {
                jpg: { image_url },
              },
            } = item;
            return (
              <Link key={mal_id} to={`/characters/${mal_id}`}>
                <div className="single-character-block m-1 mb-4 cursor-pointer bg-zinc-800 p-4">
                  <div className="sc-img-container w-full">
                    <img src={image_url} alt={name} />
                  </div>
                  <div className="sc-info-container w-full text-lg p-1 text-center">
                    {name}
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

export default Characters;
