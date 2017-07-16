import React from "react";
import ReactDOM from "react-dom";

import { QueryRenderer, graphql } from "react-relay";

import environment from "./createRelayEnv";
import Main from "./components/main";

class App extends React.Component {
  render() {
    const query = graphql.experimental`
      query appQuery($limit: Int, $query: String) {
        store {
          ...main_store @arguments(limit: $limit, query: $query)
        }
      }
    `;

    const variables = {
      limit: 50,
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
