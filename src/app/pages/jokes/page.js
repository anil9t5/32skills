import Joke from "@/app/components/jokes/Joke";
import React from "react";

const Jokes = () => {
  return (
    <div className="text-align-center"><br/><br/>
      <h2>Your Daily Dose of Jokes</h2><br/><br/>
      <Joke />
    </div>
  );
};

export default Jokes;
