import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const SingleBlockTabRecomendation = ({ url, title, route, singleroute }) => {
  const [FetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
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
          const { entry } = item;

          const {
            mal_id,
            title,
            images: {
              jpg: { image_url },
            },
          } = entry[0];

          return (
            <Link
              to={`${singleroute}${mal_id}`}
              key={mal_id}
              className="block-content flex justify-between items-start w-full bg-zinc-700 p-3"
            >
              <div className="block-img-container mr-2 flex justify-center items-center">
                <img src={image_url} alt={title} />
              </div>

              <div className="block-info-container flex flex-col justify-between items-start ">
                <span className="text-lg truncate w-full mb-5">{title}</span>
              </div>
            </Link>
          );
        })
      )}
      <div className="show-all-btn-container p-2 flex justify-center items-center w-full text-yellow-500">
        <Link to={route}>Show ALL</Link>
      </div>
    </div>
  );
};

export default SingleBlockTabRecomendation;
