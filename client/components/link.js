import React from "react";
import Relay from "react-relay/classic";
import moment from "moment";

class Link extends React.Component {
  dateLabel = () => {
    const { link, relay } = this.props;
    return relay.hasOptimisticUpdate(link)
      ? "Saving..."
      : moment(link.createdAt).format("L");
  };
  render() {
    const { link } = this.props;
    return (
      <li>
        <a href={link.url}>
          {this.dateLabel()} - {link.title}
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
        createdAt
      }
    `
  }
});
