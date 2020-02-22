import AnswersConst from "../consts/answers.const";

const initialState = {
};

function answersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AnswersConst.CORRECT_ANSWER:
      return action.data;
      case AnswersConst.BAD_ANSWER:
        return action.data;
    default:
      return state;
  }
}
export default answersReducer;
