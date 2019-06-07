import axios from "axios";
import { baseUrl } from "../../utils/constants";
import SetupGameConst from "../consts/setupGameConst";

function responseMessageAction(message) {
  return {
    type: SetupGameConst.RESPONSE_MESSAGE,
    message
  };
}

function setupGame(data) {
  const setupGameData = {
    color: data[0],
    name: data[1]
  };
  const boardSize = 32;
  return dispatch => {
    axios
      .post(`${baseUrl}/api/v1/activity/${boardSize}`, setupGameData)
      .then(response => {
        dispatch(
          responseMessageAction(
            "Registration done! Now you can login to SOVY Dashboard."
          )
        );
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}

const SetupGameAction = {
  setupGame
};

export default SetupGameAction;
