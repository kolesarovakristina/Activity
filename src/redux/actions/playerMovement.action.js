import PlayerMovementConst from "../consts/playerMovement.const";

function goToRight(z) {
  return {
    type: PlayerMovementConst.GO_RIGHT,
    z: z - 1
  };
}
function goToLeft(z) {
  return {
    type: PlayerMovementConst.GO_LEFT,
    z: z + 1
  };
}
function goToDown(x) {
  return {
    type: PlayerMovementConst.GO_DOWN,
    x
  };
}
function actualPosition(actualPosition) {
  return {
    type: PlayerMovementConst.ACTUAL_POSITION,
    actualPosition: actualPosition + 1
  };
}

const PlayerMovementAction = {
  goToRight,
  goToLeft,
  goToDown,
  actualPosition
};

export default PlayerMovementAction;
