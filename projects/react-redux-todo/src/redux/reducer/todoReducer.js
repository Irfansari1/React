import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO_LIST,
} from "../types/todoTypes";

const initialState = {
  counter: 0, //unique id vermek icin. Date.now() ile milisaniyede id üretebiliriz
  list: [
    {
      id: 0,
      text: "Add Todo",
      completed: false,
    },
  ],
};

//... önceki listeye git... sadece listeyi al..
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1, //ilk +1 genel sayiyi artiriyor ikincisi ilgili id yi unique rakam veriyor
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, completed: false },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload), // gelen veri id ise bizdekini karsilatirip ayni olmayani getirecek
      };

    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case CLEAR_TODO_LIST:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default todoReducer;
