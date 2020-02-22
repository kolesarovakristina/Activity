import axios from "axios";
import AnswersConst from "../consts/answers.const";

function correctAnswer(data) {
  return {
    type: AnswersConst.CORRECT_ANSWER,
    data
  };
}
function wrongAnswer(data) {
    return {
      type: AnswersConst.BAD_ANSWER,
      data
    };
  }
  

function correctAnswerAction(gameId) {
  return (dispatch, getState) => {
    axios(`/api/v1/activity/correctAnswer/${gameId}`)
      .then(({data}) => {
        dispatch(correctAnswer(data));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}
function wrongAnswerAction(gameId) {
    return (dispatch, getState) => {
      axios(`/api/v1/activity/wrongAnswer/${gameId}`)
        .then(({data}) => {
          dispatch(wrongAnswer(data));
        })
        .catch(err => {
          console.log("error", err);
        });
    };
  }

const AnswersAction = {
    correctAnswerAction,
    wrongAnswerAction
};

export default AnswersAction;
