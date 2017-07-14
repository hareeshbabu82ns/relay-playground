import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay/classic";

import Main from "./components/main";

class MainRoute extends Relay.Route {
  static routeName = "Home";
  static queries = {
    store: Component => Relay.QL`
      query MainQuery{
        store { ${Component.getFragment("store")}}
      }
    `
  };
}

ReactDOM.render(
  <Relay.RootContainer Component={Main} route={new MainRoute()} />,
  document.getElementById("root")
);
