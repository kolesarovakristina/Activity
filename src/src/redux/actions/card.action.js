import CardConst from "../consts/card.const";
import axios from "axios";

function getCardSuccess(data) {
  return {
    type: CardConst.FETCH_CARD_WORD_SUCCESS,
    data
  };
}

function getCard(point, gameId) {
  return (dispatch, getState) => {
    axios(`/api/v1/activity/${gameId}/card/point/${point}`)
      .then(({ data }) => {
        dispatch(getCardSuccess(data));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}

const CardAction = {
  getCard
};

export default CardAction;
