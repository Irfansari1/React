import "./Counter.css";
import Reactr from "../../react-redux.png";
import React from "react";
//index dosyasinda redux eslestirmesi yapildiktan sonra
import { useSelector, useDispatch } from "react-redux"; //state cekeceksek, useDispatch ise ekranda yapilacak degisiklikler icin
//action klasörü tanimlarsak bu kismi yapiyoruz
import { increase, decrease, reset } from "../../redux/actions/counterActions";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter); //birden fazla reducer olacagindan, combine i kullandigimiz icin counterReducer eklendi
  const dispatch = useDispatch(); //ilgili butona fonksiyon veriyoruz
  return (
    <div className="app">
      <img src={Reactr} alt="redux" />
      <h2 className="counter-header">Counter with Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          //onClick={() => dispatch({ type: "DECREMENT" })} //buradaki dispatch fonksiyonuna redux/indexteki type decrement ne ise onu yapmasini istiyoruz
          onClick={() => dispatch(decrease())} //bir üst satirdaki yazim sekli ile ayni
          className="counter-button negative"
        >
          decrease
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="counter-button zero"
        >
          reset
        </button>
        <button
          onClick={() => dispatch(increase())}
          className="counter-button positive"
        >
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
