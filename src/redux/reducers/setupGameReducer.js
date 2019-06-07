import SetupGameConst from "../consts/setupGameConst";

const initialState = {
  errMessage: null
};

function setupGameReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SetupGameConst.SETUP_GAME_SUCCESS:
      return {
        ...state,
        errMessage: null
      };
    case SetupGameConst.FAILED:
      return { ...state, errMessage: "Something goes wrong." };
    default:
      return state;
  }
}
export default setupGameReducer;
