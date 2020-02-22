import { connect } from "react-redux";
import AnswersAction from "../../redux/actions/answers.action";
import Answers from "../../components/Answers";

const mapStateToProps = state => ({
  gameId: state.createGameReducer.gameId,
});
const mapDispatchToProps = dispatch => ({
  correctAnswer: (gameId) => {
    dispatch(AnswersAction.correctAnswerAction(gameId));
  },
  wrongAnswer:(gameId)=>{
    dispatch(AnswersAction.wrongAnswerAction(gameId))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers);
