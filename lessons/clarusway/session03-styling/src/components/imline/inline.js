import React from "react";
import { myStyles } from "./styles";

/* const myStyles = {
  paragraf: {
    color: "green",
    fontSize: "1.2rem",
    fontWeight: "bolder",
  },
  seconddiv: {
    backgroundColor: "purpuple",
  },
}; */

const inline = () => {
  return (
    <div style={{ backgroundColor: "red", color: "white" }}>
      <h1 style={{ backgroundColor: "yellow", color: "black" }}>
        Hello from inline
      </h1>
      <p style={myStyles.paragraf}>Inline styling in react</p>
      <div style={myStyles.seconddiv}>
        <p>seconddiv</p>
      </div>
    </div>
  );
};

export default inline;
