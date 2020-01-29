import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/index";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

const initialState = {};
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const store = configureStore(initialState, history);

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
