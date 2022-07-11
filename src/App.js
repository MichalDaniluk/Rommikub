import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./App.scss";

import indexReducer from "./reducers/index";
import Game from "./components/Game";

let store = configureStore({ reducer: indexReducer });
console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

export default App;
