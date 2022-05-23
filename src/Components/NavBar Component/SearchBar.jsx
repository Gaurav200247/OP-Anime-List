import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [SearchValue, setSearchValue] = useState("");
  const [FetchedData, setFetchedData] = useState([]);

  const url = `https://api.jikan.moe/v4/anime`;

  const getData = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data);
      if (data) {
        setFetchedData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (SearchValue) {
      getData(`${url}?q=${SearchValue}`);
    }
    if (!SearchValue) {
      setFetchedData([]);
    }

    // console.log(FetchedData);

    dispatch({
      type: "SetSearchedData",
      payload: FetchedData,
    });

    setSearchValue("");
  };

  return (
    <form
      className="searchbar-container flex justify-around items-center bg-white text-black pt-2 pb-2"
      onSubmit={(e) => HandleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Search Anime"
        className="search-input"
        value={SearchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <AiOutlineSearch className="text-2xl cursor-pointer" />
    </form>
  );
};

export default SearchBar;
