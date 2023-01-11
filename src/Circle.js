import React, { useState } from "react";

const Circle = () => {
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setColor(color === "red" ? "blue" : "red");
  };

  return (
    <div
      onClick={handleClick}
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

export default Circle;
