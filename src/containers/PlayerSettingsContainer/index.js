import { connect } from "react-redux";
import CreateGameAction from "../../redux/actions/createGame.action";
import PlayerSettings from "../../components/PlayerSettings";

const mapStateToProps = state => ({
  status: state.createGameReducer.status
});
const mapDispatchToProps = dispatch => ({
  createGameAction: users => {
    dispatch(CreateGameAction.createGame(users));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSettings);
