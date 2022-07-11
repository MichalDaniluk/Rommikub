const initialState = {
  currentPlayer: 0,
  players: [],
  cubes: [],
};

function gameReducer(state = initialState, action:any) {
  if (action.type === "increment") {
    return {
      ...state,
      currentPlayer: state.currentPlayer + 1,
    };
  }

  return state;
}

export default gameReducer;
