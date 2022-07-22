import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer,
});

export const getStore = () => {
  const store = createStore(rootReducer);
  return store;
};
