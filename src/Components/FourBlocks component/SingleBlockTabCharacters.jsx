import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import "../../CSS/FourBlocksTab.css";
import { RiSwordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleBlockTabCharacters = ({ url, title }) => {
  const [FetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);
        if (data) {
          let newData = data.data.slice(0, 5);
          setFetchedData(newData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData(url);
  }, [url]);

  return (
    <div className="single-block m-5 bg-zinc-700">
      <div className="block-heading text-2xl p-2 text-yellow-500">{title}</div>
      {!FetchedData ? (
        <Loading />
      ) : (
        FetchedData.map((item) => {
          const {
            mal_id,
            name,
            nicknames,
            images: {
              jpg: { image_url },
            },
          } = item;
          return (
            <Link
              key={mal_id}
              className="block-content flex justify-between items-start w-full bg-zinc-700 p-3"
              to={`characters/${mal_id}`}
            >
              <div className="block-img-container mr-2 flex justify-center items-center">
                <img src={image_url} alt={name} />
              </div>

              <div className="block-info-container flex flex-col justify-between items-start ">
                <span className="text-xl truncate w-full mb-5">{name}</span>
                <span className="flex flex-col text-sm w-full ">
                  {nicknames.map((item, index) => {
                    return (
                      <span key={index} className="flex  truncate">
                        <RiSwordLine className="mr-2 mt-1" /> {item}
                      </span>
                    );
                  })}
                </span>
              </div>
            </Link>
          );
        })
      )}
      <div className="show-all-btn-container p-2 flex justify-center items-center w-full text-yellow-500">
        <Link to="/characters">Show ALL</Link>
      </div>
    </div>
  );
};

export default SingleBlockTabCharacters;
