import React from "react";
import Relay from "react-relay/classic";

import Link from "./link";

class Main extends React.Component {
  setLimit = e => {
    const limit = Number(e.target.value);
    console.log(limit);
    this.props.relay.setVariables({ limit });
  };
  render() {
    const links = this.props.store.linkConnection.edges.map(edge =>
      <Link key={edge.node.id} link={edge.node} />
    );
    return (
      <div>
        <h3>Links</h3>
        <select onChange={this.setLimit} defaultValue="10">
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <ul>
          {links}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(Main, {
  initialVariables: {
    limit: 10
  },
  fragments: {
    store: () => Relay.QL`
      fragment on Store{
        linkConnection(first: $limit){
          edges{
            node{
              id
              ${Link.getFragment("link")}
            }
          }
        }
      }
    `
  }
});
