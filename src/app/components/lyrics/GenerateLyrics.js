"use client";
import Axios from "axios";
import { useState, useEffect } from "react";
import styles from './GenerateLyrics.module.css';

function GenerateLyrics() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("Loading default lyrics...");

  // Fetch default lyrics when the component first mounts
  useEffect(() => {
    const fetchDefaultLyrics = async () => {
      try {
        const res = await Axios.get(`https://api.lyrics.ovh/v1/Ed Sheeran/Perfect`);
        setLyrics(res.data.lyrics);
      } catch (error) {
        setLyrics("Default lyrics could not be loaded.");
        console.error(error);
      }
    };

    fetchDefaultLyrics();
  }, []);

  const searchLyrics = async () => {
    if (artist === "" || song === "") {
      return;
    }

    try {
      const res = await Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      setLyrics(res.data.lyrics);
    } catch (error) {
      setLyrics("Lyrics not found. Please check the artist and song name.");
      console.error(error);
    }
  };

  return (
    <div><br /><br />
      <input
        type="text"
        className={styles.inputField}
        placeholder="Artist name"
        onChange={(e) => {
          setArtist(e.target.value);
        }}
      />&nbsp;&nbsp;
      <input
        type="text"
        className={styles.inputField}
        placeholder="Song name"
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />&nbsp;&nbsp;
      <button className={styles.btn} onClick={searchLyrics}>
        Search
      </button>
      <br /><br />
      <hr /><br /><br />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default GenerateLyrics;
