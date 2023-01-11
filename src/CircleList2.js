import React, { useState } from "react";

const CircleList = ({ numberOfCircles }) => {
  const [circles, setCircles] = useState(Array(numberOfCircles).fill(0));

  const handleClick = (index) => {
    const newCircles = [...circles];
    newCircles[index] = newCircles[index] === 0 ? 1 : 0;
    setCircles(newCircles);
  };

  const changeCirclesState = (newState) => {
    handleClick(0);
  };

  return (
    <div className="circle-list">
      {circles.map((circle, index) => (
        <Circle
          key={index}
          onClick={() => handleClick(index)}
          active={circle}
        />
      ))}
    </div>
  );
};

const Circle = ({ onClick, active }) => {
  const color = active ? "blue" : "red";
  return (
    <div
      onClick={onClick}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    ></div>
  );
};

export default CircleList;
