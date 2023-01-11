import CircleList from "./CircleList2";
import "./styles.css";
import React from "react";

export default function App() {
  let circleRef = React.createRef();

  const changeCircleStateFromOutSide = () => {
    // circleRef.changeCirclesState;
  };

  return (
    <div className="App">
      <h1>Circles</h1>
      <button onClick={changeCircleStateFromOutSide}>Click me</button>
      <CircleList numberOfCircles={25} ref={circleRef} />
    </div>
  );
}
