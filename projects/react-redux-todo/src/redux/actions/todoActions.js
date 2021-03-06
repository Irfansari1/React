import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO_LIST,
} from "../types/todoTypes";

//we use payload as there is an input. return must be an object
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST,
  };
};
