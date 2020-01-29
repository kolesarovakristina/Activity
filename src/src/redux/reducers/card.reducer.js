import CardConst from "../consts/card.const";

const initialState = {};

function cardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CardConst.FETCH_CARD_WORD_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
export default cardReducer;
