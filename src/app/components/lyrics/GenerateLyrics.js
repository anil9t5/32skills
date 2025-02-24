"use client";
import Axios from "axios";
import { useState } from "react";

function GenerateLyrics() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  const searchLyrics = async () => {
    if (artist === "" || song === "") {
      return;
    }

    await Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Credentials": true,
      },
    }).then((res) => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    });
  };

  return (
    <div>
      <h1>Finder</h1>

      <input
        className="inp"
        type="text"
        placeholder="Artist name"
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />
      <input
        className="inp"
        type="text"
        placeholder="Song name"
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />
      <button className="btn" onClick={searchLyrics}>
        Search
      </button>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default GenerateLyrics;
