import { connect } from "react-redux";
import CardAction from "../../redux/actions/card.action";
import Cards from "../../components/Cards";

const mapStateToProps = state => ({
  gameId: state.createGameReducer.playersData.board.id,
  word: state.cardReducer.word
});
const mapDispatchToProps = dispatch => ({
  getCardAction: (point, gameId) => {
    dispatch(CardAction.getCard(point, gameId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
