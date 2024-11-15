'use client'

import React from "react";
import GenerateJoke from "./GenerateJoke";
import styles from "./Joke.module.css"

const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className={styles.joke}>
            <GenerateJoke callApi={fetchApi} />

            <p>{Joke}</p>
        </div>
    );
}

export default Joke;