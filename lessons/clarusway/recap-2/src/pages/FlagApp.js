import React, { useEffect, useState } from "react";

const FlagApp = () => {
  const [countries, setCountries] = useState([]); //cekecegimiz yer array yapisinda oldugu icin
  const [hata, setHata] = useState(false);
  const [status, setStatus] = useState(200);

  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setHata(true);
        }
      }) //jsona ceviridik , data herhangi bir isim olabilir
      .then((data) => setCountries(data)) //ondan sonra bunu yap
      .catch((err) => console.log(err));
  }, [hata]); //component ilk baglandiginde calisacak
  //map kullanirken unique bir key veriyoruz

  if (!hata) {
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">{countries.length} Countries</h1>
        {countries.map((country) => {
          const { name, capital, flags } = country;
          return (
            <div key={name.common} style={{ marginBottom: "20px" }}>
              <h2>{name.common}</h2>
              <h4>Capital={capital}</h4>
              <img src={flags[0]} alt={name.common} width="30%" />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="bg-danger text-center text-light mt-5">
          !!Hata, Veriler Çekilemedi-Code:{status}
        </h1>
        <button
          className="btn btn-outline-warning"
          onClick={() => setHata(false)}
        >
          Update
        </button>
      </div>
    );
  }
};
//süslü parantez acilmisa return ve parantez olmasi lazim
export default FlagApp;
