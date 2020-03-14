import CreateGameConst from "../consts/createGame.const";

const initialState = {
  status: null,
  gameId: 0,
  players: [
    {
      name: "Jozko", color: "#FF0000"
    },
    { name: "Matko", color: "#008000" }
  ]
};

function createGameReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CreateGameConst.CREATE_GAME_SUCCESS:
      return {
        ...state,
        gameId: action.data.board.id,
        players: [...action.data.board.players],
        status: "success"
      };
    case CreateGameConst.CREATE_GAME_IN_PROGRESS:
      return { ...state, status: "loading" };
    case CreateGameConst.CREATE_GAME_FAILED:
      return { ...state, status: "failed" };
    default:
      return state;
  }
}
export default createGameReducer;
