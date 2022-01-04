import { createStore, combineReducers } from "redux"; //birden fazla reducer gelirse combine. (reduxa ait bir fonksiyon)
import counterReducer from "./reducer/counterReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
});

export const combineStore = () => {
  const store = createStore(reducers); //ana indexte yapilmisti buraya aliyoruz
  return store;
};
//object olmak zorunda degil, proje ilk yüklendiginde gelecek olan deger
//burasi react ve redux iletisim yeri

/* const initialState = {
  counter: 0,
};

//first parameter must be state and the second is action
//state will be obtained from the frontend
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "RESET":
      return {
        counter: 0,
      };

    default:
      return state;
  }
};

export default reducer; */

//baglanti islemi en üst dosyada gerceklestiriliyor yani Index.js...
