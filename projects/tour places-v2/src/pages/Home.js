import React from "react";
import Slider from "../components/Slider";
import Destinations from "../components/Destinations";
import dataDest from "../data/dataDest";

const Home = () => {
  return (
    <div>
      <Slider />
      <Destinations data={dataDest} />
    </div>
  );
};

export default Home;
