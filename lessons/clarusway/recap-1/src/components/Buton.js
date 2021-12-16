import React from "react";

const btnStyle = {
  borderRadius: "10px",
  fontSize: "20px",
};

//sabit sitili burada tanimladik, degiskenleri props ile aldik

const divStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  padding: "10px",
};

const buton = (props) => {
  const { click, name, color, bgColor } = props;
  return (
    <div style={divStyle}>
      <button
        style={{ ...btnStyle, color: color, background: bgColor }}
        onClick={click}
        //cagirdigimiz sayfda color ve bg tanimladik, destrsuturing yaptik
      >
        {name}
      </button>
    </div>
  );
};
// yukaridaki onClick ile ayni ile onClick ise degismez olmali
export default buton;
