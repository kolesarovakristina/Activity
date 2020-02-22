import TimerConst from "../consts/timer.const";
import axios from "axios";

function startTimeSuccess() {
  return {
    type: TimerConst.START_TIMER,
  };
}

function startTime(gameId) {
  return (dispatch, getState) => {
    axios(`/api/v1/activity/timer/${gameId}`)
      .then(() => {
        dispatch(startTimeSuccess());
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}

const TimerAction = {
  startTime,
};

export default TimerAction;
