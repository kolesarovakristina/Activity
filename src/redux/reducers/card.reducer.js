import CardConst from "../consts/card.const";

const initialState = {
  data:{},
  open:false
};

function cardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CardConst.FETCH_CARD_WORD_SUCCESS:
      return action.data;
      case CardConst.CLOSE_CARD:
        return {data:action.data, open:false};
    default:
      return state;
  }
}
export default cardReducer;
