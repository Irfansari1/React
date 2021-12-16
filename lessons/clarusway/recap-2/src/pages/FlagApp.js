import React, { useEffect, useState } from "react";

const FlagApp = () => {
  const [countries, setCountries] = useState([]); //cekecegimiz yer array yapisinda oldugu icin
  const [hata, setHata] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setHata(true);
        }
      }) //jsana ceviridik , data herhangi bir isim olabilir
      .then((data) => setCountries(data)) //ondan sonra bunu yap
      .catch((err) => console.log(err));
  }, []); //component ilk baglandiginde calisacak
  //map kullanirken unique bir key veriyoruz

  if (!hata) {
    return (
      <div>
        <h1>Countries</h1>
        {countries.map((country) => {
          const { name, capital, flags } = country;
          return (
            <div key={name.common}>
              <h2>{name.common}</h2>
              <img src={flags[0]} alt="" />
              <h4>{capital}</h4>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>!!Hata, Veriler Çekilemedi</h1>
      </div>
    );
  }
};
//süslü parantez acilmisa return ve parantez olmasi lazim
export default FlagApp;
