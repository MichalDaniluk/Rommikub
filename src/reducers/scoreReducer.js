const initialState = {
  score: 0,
  player: 0,
};

function scoreReducer(state = initialState, action) {
  if (action.type === "score/increment") {
    return {
      ...state,
      score: state.value + 1,
      player: state.player + 1,
    };
  }

  return state;
}

export default scoreReducer;
