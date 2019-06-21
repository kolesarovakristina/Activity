import { combineReducers } from "redux";
import CreateGameReducer from "./createGame.reducer";
import CardReducer from "./card.reducer";

const rootReducer = combineReducers({
  createGameReducer: CreateGameReducer,
  cardReducer: CardReducer
});

export default rootReducer;
