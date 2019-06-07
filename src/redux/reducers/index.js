import { combineReducers } from "redux";
import setupGameReducer from "./setupGameReducer";

const rootReducer = combineReducers({
  setupGame: setupGameReducer
});

export default rootReducer;
