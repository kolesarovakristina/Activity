import { connect } from "react-redux";
import ThreeScene from "../../components/Three/threeScene";

const mapStateToProps = state => ({
  players: state.createGameReducer.players
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreeScene);
