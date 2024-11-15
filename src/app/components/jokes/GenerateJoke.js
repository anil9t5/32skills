'use client'
import React from 'react'
import styles from "./Joke.module.css"

const GenerateJoke = (props) => {
  return (
    <div><button className={styles.generateJoke} onClick={props.callApi}>
    Click to generate a joke.
</button></div>
  )
}

export default GenerateJoke