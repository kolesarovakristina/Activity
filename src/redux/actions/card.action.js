import CardConst from "../consts/card.const";
import axios from "axios";

function getCardSuccess(data) {
  return {
    type: CardConst.FETCH_CARD_WORD_SUCCESS,
    data
  };
}
function closeCard() {
  return {
    type: CardConst.CLOSE_CARD,
  };
}
function getCard(point, gameId) {
  return (dispatch, getState) => {
    axios(`/api/v1/activity/card/point/${point}/gameId/${gameId}`)
      .then(({ data }) => {
        dispatch(getCardSuccess(data));
        console.log(point)
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}

const CardAction = {
  getCard,
  closeCard
};

export default CardAction;
