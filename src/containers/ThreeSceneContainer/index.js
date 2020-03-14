import { connect } from "react-redux";
import ThreeScene from "../../components/ThreeScenePage/scene";

const mapStateToProps = state => ({
  players: state.createGameReducer.players,
  coordinate:state.cardReducer.coordinate
});
const mapDispatchToProps = dispatch => ({
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreeScene);
