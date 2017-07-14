import React from "react";
import Relay from "react-relay/classic";

import Link from "./link";

class Main extends React.Component {
  render() {
    const links = this.props.store.links.map(link =>
      <Link key={link._id} link={link} />
    );
    return (
      <ul>
        {links}
      </ul>
    );
  }
}

export default Relay.createContainer(Main, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store{
        links{
          _id
          ${Link.getFragment("link")}
        }
      }
    `
  }
});
