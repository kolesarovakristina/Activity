import PlayerMovementConst from "../consts/playerMovement.const";

const initialState = {
  COLUMNSCOUNT:4,
  playerMovement: {
    z: 0,
    x: 0,
    actualPosition: 1
  }
};

function playerMovementReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PlayerMovementConst.GO_RIGHT:
      if(Math.ceil(action.actualPosition / this.COLUMNSCOUNT) % 2 === 1){
        return {
          ...state,
          playerMovement: {
            z: action.z,
            actualPosition: action.actualPosition
          }
        };
      }
      break;
    case PlayerMovementConst.GO_LEFT:
      if(Math.ceil(action.actualPosition / state.COLUMNSCOUNT) % 2 === 0){
        return {
          ...state,
          playerMovement: {
            z: action.z,
            actualPosition: action.actualPosition
          }
        };
      }
      break;
    case PlayerMovementConst.GO_DOWN:
      if(action.actualPosition%state.COLUMNSCOUNT===0){
        return {
          ...state,
          playerMovement: { x: action.x, actualPosition: action.actualPosition }
        };
      }
      break;
    default:
      return state;
  }
}
export default playerMovementReducer;
