import CardConst from "../consts/card.const";
import axios from "axios";

function openCard(data) {
  return {
    type: CardConst.OPEN_CARD,
    data
  };
}
function closeCard() {
  return {
    type: CardConst.CLOSE_CARD,
  };
}
function openCardAndFetchData(point, gameId) {
  return (dispatch, getState) => {
    axios(`/api/v1/activity/card/point/${point}/gameId/${gameId}`)
      .then(({ data }) => {
        dispatch(openCard(data));
        console.log(point)
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}

const CardAction = {
  openCardAndFetchData,
  closeCard
};

export default CardAction;
