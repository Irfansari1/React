import React from "react";
import Buton from "../components/Buton";
import Welcome from "../components/Welcome";
import aboutImg from "../img/about.jpg";

const handleClick = () => {
  alert("About sayfasinin detaylarina yönlendiriliyorsunuz");
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={aboutImg} />
      <Buton name="about" click={handleClick} color="white" bgColor="red" />
    </div>
  );
};

export default About;
