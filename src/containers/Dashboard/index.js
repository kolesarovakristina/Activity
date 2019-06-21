import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import SetupGame from "../../components/SetupGame";
import ThreeContainer from "../ThreeSceneContainer";

const Dashboard = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/homepage" />} />
    <Route path="/homepage" component={Homepage} />
    <Route path="/setupGame" component={SetupGame} />
    <Route path="/activity" component={ThreeContainer} />
  </Switch>
);
export default Dashboard;
