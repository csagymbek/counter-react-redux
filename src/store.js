import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter";
import inputReducer from "./input";

const rootReducer = combineReducers({
  counter: counterReducer,
  inputValue: inputReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
