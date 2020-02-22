import { combineReducers } from "redux";
import CreateGameReducer from "./createGame.reducer";
import CardReducer from "./card.reducer";
import AnswerReducer from "./answers.reducer"
import PlayerMovementReducer from "./playerMovement.reducer"

const rootReducer = combineReducers({
  createGameReducer: CreateGameReducer,
  cardReducer: CardReducer,
  answersReducer:AnswerReducer,
  playerMovementReducer:PlayerMovementReducer
});

export default rootReducer;
