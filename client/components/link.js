import React from "react";
import Relay from "react-relay/classic";

class Link extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <li>
        <a href={link.url}>
          {link.title}
        </a>
      </li>
    );
  }
}
export default Relay.createContainer(Link, {
  fragments: {
    link: () => Relay.QL`
      fragment on Link{
        title
        url
      }
    `
  }
});
