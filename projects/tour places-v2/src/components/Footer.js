import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center bg-dark p-3"
      style={{
        marginTop: "30px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <p className="text-light">Copyright 2021</p>
    </footer>
  );
};

export default Footer;