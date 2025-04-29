import React, { useState } from "react";
import Axios from "axios";

const GenerateAvatar = () => {
  const [sprite, setSprite] = useState("bottts");
  const [seed, setSeed] = useState("default");

  function handleSprite(spritetype) {
    setSprite(spritetype);
  }

  function handleGenerate() {
    const randomSeed = Math.random().toString(36).substring(2, 10);
    setSeed(randomSeed);
  }

  function downloadImage() {
    const url = `https://api.dicebear.com/7.x/${sprite}/svg?seed=${seed}`;
    Axios({
      method: "get",
      url: url,
      responseType: "blob",
    })
      .then((response) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(response.data);
        link.download = `${seed}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Download failed", error);
      });
  }

  return (
    <div className="container">
      <div className="nav">
        <p>Random Avatar Generator</p>
      </div>
      <div className="home">
        <div className="btns">
          <button onClick={() => handleSprite("avataaars")}>Human</button>
          <button onClick={() => handleSprite("pixel-art")}>Pixel</button>
          <button onClick={() => handleSprite("bottts")}>Bots</button>
          <button onClick={() => handleSprite("identicon")}>Identi</button>
          <button onClick={() => handleSprite("gridy")}>Alien</button>
          <button onClick={() => handleSprite("micah")}>Avatars</button>
        </div>
        <div className="avatar">
          <img
            src={`https://api.dicebear.com/7.x/${sprite}/svg?seed=${seed}`}
            alt="Avatar"
          />
        </div>
        <div className="generate">
          <button id="gen" onClick={handleGenerate}>
            Next
          </button>
          <button id="down" onClick={downloadImage}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateAvatar;
