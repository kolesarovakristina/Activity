import { connect } from "react-redux";
import CardAction from "../../redux/actions/card.action";
import TimerAction from "../../redux/actions/timer.action";
import Cards from "../../components/Cards/index";

const mapStateToProps = state => ({
  gameId: state.createGameReducer.gameId,
  word: state.cardReducer.word,
});
const mapDispatchToProps = dispatch => ({
  openCardAction: (point, gameId) => {
    dispatch(CardAction.openCardAndFetchData(point, gameId));
  },
  closeCardAction:()=>{
    dispatch(CardAction.closeCard())
  },
  startTimeAction: (gameId) => {
    dispatch(TimerAction.startTime(gameId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
