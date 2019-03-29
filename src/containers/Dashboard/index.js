import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import GameBoard from "../../components/GameBoard/board";
import Player from "../../components/Player";

const Dashboard = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/homepage" />} />
    <Route path="/homepage" component={Homepage} />
    <Route path="/gameboard" component={Player} />
  </Switch>
);
export default Dashboard;
