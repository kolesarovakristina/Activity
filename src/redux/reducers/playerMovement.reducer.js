import PlayerMovementConst from "../consts/playerMovement.const";

const initialState = {
  playerMovement: {
    z: 0,
    x: 0,
    actualPosition: 1
  }
};

function playerMovementReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PlayerMovementConst.GO_RIGHT:
      return {
        ...state,
        playerMovement: {
          z: action.z,
          actualPosition: action.actualPosition
        }
      };
    case PlayerMovementConst.GO_LEFT:
      return {
        ...state,
        playerMovement: {
          z: action.z,
          actualPosition: action.actualPosition
        }
      };
    case PlayerMovementConst.GO_DOWN:
      return {
        ...state,
        playerMovement: { x: action.x, actualPosition: action.actualPosition }
      };
    default:
      return state;
  }
}
export default playerMovementReducer;
