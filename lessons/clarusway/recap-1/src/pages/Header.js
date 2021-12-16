import React from "react";
import Buton from "../components/Buton";
import Welcome from "../components/Welcome";
import headerImg from "../img/headers.jpg";

const handleClick = () => {
  alert("Header sayfasinin detaylarina yönlendiriliyorsunuz");
};

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Welcome name="Header" img={headerImg} />
      <Buton name="header" click={handleClick} color="red" bgColor="blue" />
    </div>
  );
};

export default Header;
