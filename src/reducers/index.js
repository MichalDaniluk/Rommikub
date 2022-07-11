import React from "react";
import { combineReducers } from "redux";

import gameReducer from "../reducers/gameReducer";
import counterReducer from "../reducers/counterReducer";
import scoreReducer from "../reducers/scoreReducer";

const index = combineReducers({
  counter: counterReducer,
  score: scoreReducer,
  game: gameReducer,
});

export default index;
