import TimerConst from "../consts/timer.const";
import axios from "axios";

function start() {
  return {
    type: TimerConst.START_TIMER,
  };
}
function startTime(gameId) {
  return (dispatch, getState) => {
    axios(`/api/v1/activity/timer/${gameId}`)
      .then(() => {
        dispatch(start());
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
