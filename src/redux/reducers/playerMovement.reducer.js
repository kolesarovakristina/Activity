import AnswersConst from "../consts/answers.const";

const initialState = {
  COLUMNSCOUNT: 4,
  playerMovement: {
    z: 0,
    x: 0,
    actualPosition: 1
  }
};

function playerMovementReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AnswersConst.CORRECT_ANSWER:
      //GO_DOWN
      if (state.actualPosition % state.COLUMNSCOUNT === 0) {
        return {
          ...state,
          playerMovement: {
            x: state.playerMovement.x,
            actualPosition: state.actualPosition + 1
          }
        };
      }
      //GO_LEFT
      if (Math.ceil(state.actualPosition / state.COLUMNSCOUNT) % 2 === 0) {
        return {
          ...state,
          playerMovement: {
            z: state.playerMovement.z + 1,
            x: state.playerMovement.x,
            actualPosition: state.actualPosition + 1
          }
        };
      }
      //GO_RIGHT
      if (Math.ceil(state.actualPosition / state.COLUMNSCOUNT) % 2 === 1) {
        return {
          ...state,
          playerMovement: {
            z: state.playerMovement.z - 1,
            x: state.playerMovement.x,
            actualPosition: state.actualPosition + 1
          }
        };
      }
      break;
    default:
      return state;
  }
}
export default playerMovementReducer;
