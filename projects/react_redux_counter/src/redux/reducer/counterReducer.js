import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
} from "../types/counterTypes";

//src index dosyasindaki switch yapisini buraya kopyalariz, const reducer i counterReducer olarak degistirdik

const initialState = {
  counter: 0,
};

//first parameter must be state and the second is action
//state will be obtained from the frontend
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER: //case "INCREMENT" yerine(string) degisken yerlestiriyoruz ardindan src indexe gidip kisaltma yapiyoruz
      return {
        //ana index te yaptigimiz redux islemlerini src indexte yapacagiz
        counter: state.counter + 1,
      };
    case DECREASE_COUNTER:
      return {
        //return ,obje olarak dönüyor
        counter: state.counter - 1,
      };
    case RESET_COUNTER:
      return {
        counter: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;

//baglanti islemi en üst dosyada gerceklestiriliyor yani Index.js...
