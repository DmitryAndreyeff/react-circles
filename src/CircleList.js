import React from "react";
import Circle from "./Circle";

const colors = ["red", "blue", "green", "purple", "orange"];

const CircleList = () => {
  return (
    <div>
      {colors.map((color, index) => (
        <Circle />
      ))}
    </div>
  );
};

export default CircleList;
