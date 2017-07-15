import React from "react";
import ReactDOM from "react-dom";

import { QueryRenderer, graphql } from "react-relay";

import environment from "./createRelayEnv";
import Main from "./components/main";

class App extends React.Component {
  render() {
    const query = graphql`
      query app_MainQuery {
        store {
          ...main_store
        }
      }
    `;

    const variables = {
      limit: 10,
      query: ""
    };

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={RenderApp}
      />
    );
  }
}

function RenderApp({ error, props }) {
  if (error) {
    return (
      <div>
        {error.message}
      </div>
    );
  } else if (props) {
    return (
      <div>
        <Main {...props} />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
