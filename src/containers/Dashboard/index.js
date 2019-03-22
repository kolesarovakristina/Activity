import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import GameBoardPage from "../GameBoardPage";

const Dashboard = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/homepage" />} />
    <Route path="/homepage" component={Homepage} />
    <Route path="/gameboard" component={GameBoardPage} />
  </Switch>
);
export default Dashboard;
