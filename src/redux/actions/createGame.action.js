import axios from "axios";
import CreateGameConst from "../consts/createGame.const";

function createGameSuccess(data) {
  return {
    type: CreateGameConst.CREATE_GAME_SUCCESS,
    data
  };
}
function createGameInProgress() {
  return {
    type: CreateGameConst.CREATE_GAME_IN_PROGRESS
  };
}
function createGameFailed() {
  return {
    type: CreateGameConst.CREATE_GAME_FAILED
  };
}

function createGame(users) {
  const boardSize = 32;
  return dispatch => {
    dispatch(createGameInProgress());
    axios
      .post(`/api/v1/activity/${boardSize}`, users)
      .then(({ data }) => {
          dispatch(createGameSuccess(data));
      })
      .catch(err => {
        dispatch(createGameFailed(err));
      });
  };
}

const CreateGameAction = {
  createGame
};

export default CreateGameAction;
