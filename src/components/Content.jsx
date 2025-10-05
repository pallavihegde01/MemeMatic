import React, { useEffect, useState } from "react";
import memepic from "../assets/meme-picture.jpg";

const Content = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imgUrl: memepic,
  });

  const [allMemes, setAllMemes] = useState([]);

  const getMemeImg = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const memeImgUrl = allMemes[randomNumber].url;

    setMeme((prev) => ({
      ...prev,
      imgUrl: memeImgUrl,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    };
    fetchMemes();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-6 w-full p-4">
        <div className="flex flex-col w-1/2 md:w-1/3">
          <label className="mb-1 font-medium">Top text</label>
          <input
            className="border border-black shadow-md rounded-md px-2 py-1 w-full"
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-1/2 md:w-1/3">
          <label className="mb-1 font-medium">Bottom text</label>
          <input
            className="border border-black shadow-md rounded-md px-2 py-1 w-full"
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          className="bg-purple-800 text-white sm:text-lg rounded-md px-4 py-2"
          onClick={getMemeImg}
        >
          Get a New Meme Image 🖼️
        </button>
      </div>

      <div className="flex justify-center mt-6 relative">
        <img
          src={meme.imgUrl}
          alt="meme"
          className="w-full max-w-[85%] md:max-w-[75%] mx-auto rounded-md"
        />

        <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none">
          <p
            className="mt-5 text-2xl sm:text-4xl md:text-7xl font-bold text-white drop-shadow-lg uppercase 
                      bg-black/50 px-4 py-2 rounded-md text-center max-w-[85%] md:max-w-[75%] break-words"
          >
            {meme.topText}
          </p>

          <p
            className="mb-5 text-2xl sm:text-4xl md:text-7xl font-bold text-white drop-shadow-lg uppercase 
                      bg-black/50 px-4 py-2 rounded-md text-center max-w-[85%] md:max-w-[75%] break-words"
          >
            {meme.bottomText}
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
