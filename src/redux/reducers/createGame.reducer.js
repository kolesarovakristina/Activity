import CreateGameConst from "../consts/createGame.const";

const initialState = {
  playersData: {
    board: {
      players: [
        {
          color: "red",
          name: "jozko"
        },
        {
          color: "yellow",
          name: "matko"
        }
      ]
    }
  },
  status: null
};

function createGameReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CreateGameConst.CREATE_GAME_SUCCESS:
      return { ...state, playersData: action.data, status: "success" };
    case CreateGameConst.CREATE_GAME_IN_PROGRESS:
      return { ...state, status: "loading" };
    case CreateGameConst.CREATE_GAME_FAILED:
      return { ...state, status: "failed" };
    default:
      return state;
  }
}
export default createGameReducer;
