import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import Loadable from "@7rulnik/react-loadable";
import Loading from "./components/LoadingPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus);

const LoadableComponent = Loadable({
  loader: () => import("./containers/Dashboard"),
  loading: Loading
});

const App = () => (
  <Switch>
    <Route path="/" component={LoadableComponent} />
  </Switch>
);
export default withRouter(App);
