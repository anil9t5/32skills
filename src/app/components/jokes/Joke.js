'use client';

import React, { useEffect, useState } from "react";
import GenerateJoke from "./GenerateJoke";
import styles from "./Joke.module.css";

const Joke = () => {
  const [joke, setJoke] = useState("Loading a joke...");

  const fetchApi = () => {
    const categories = ["Programming", "Miscellaneous", "Pun", "Dark", "Spooky", "Christmas"];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const jokeType = Math.random() < 0.5 ? "single" : "twopart";

    fetch(`https://sv443.net/jokeapi/v2/joke/${randomCategory}?type=${jokeType}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.type === "single") {
          setJoke(data.joke);
        } else if (data.type === "twopart") {
          setJoke(`${data.setup} - ${data.delivery}`);
        } else {
          setJoke("No joke found.");
        }
      })
      .catch(() => setJoke("Couldn't load a joke. Try again later."));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.joke}>
      <GenerateJoke callApi={fetchApi} />
      <br /><br />
      <h1>{joke}</h1>
    </div>
  );
};

export default Joke;
