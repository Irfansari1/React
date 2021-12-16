import React from "react";

const welcome = (props) => {
  const { name, img } = props; // destructuring
  console.log(props);
  return (
    <div>
      <h2>Welcome to {name}</h2>
      <img src={img} alt="" />
    </div>
  );
};

export default welcome;
