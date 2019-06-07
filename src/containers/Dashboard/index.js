import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import PlayerSetting from "../../components/PlayerSettings";
import Three from "../../components/Three/threeScene";

const Dashboard = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/homepage" />} />
    <Route path="/homepage" component={Homepage} />
    <Route path="/playerSetting" component={PlayerSetting} />
    <Route path="/gameBoard" component={Three} />
  </Switch>
);
export default Dashboard;
