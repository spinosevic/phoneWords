import React from "react";

const Words = (props) => (
  <div className="wordList" >
    <h2>Words List</h2>
    {props.words.map(word=><li>{word}</li>)}
  </div>
);

export default Words
