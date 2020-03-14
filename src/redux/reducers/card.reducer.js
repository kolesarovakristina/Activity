import CardConst from "../consts/card.const";

const initialState = {
  word: null,
  coordinate: {
    x:0
  },
  open: false
};

function cardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CardConst.OPEN_CARD:
      return {
        ...state,
        word: action.data.word,
        coordinate: action.data.coordinate.x,
        open: true
      };
    case CardConst.CLOSE_CARD:
      return { ...state, open: false };
    default:
      return state;
  }
}
export default cardReducer;
