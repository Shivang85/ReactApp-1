"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [Images, setImages] = useState([]);

  const show = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(data)
    } catch (error) {
      console.log("Error occured while fetching images");
    }
  };

  return (
    <>
      <p className="m-14 text-center text-9xl italic">Home</p>
      <button
        onClick={show}
        className="ms-96 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-10 border border-blue-500 hover:border-transparent rounded"
      >
        Images
      </button>
      <div className="p-10">
        {Images.map((elem, i) => {
           return <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="inline-block rounded m-10"
            />;
          })}
      </div>
    </>
  );
};

export default page;
