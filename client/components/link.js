import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import moment from "moment";

class Link extends React.Component {
  dateLabel = () => {
    const { link, relay } = this.props;
    // return relay.hasOptimisticUpdate(link)
    //   ? "Saving..."
    //   : moment(link.createdAt).format("L");
    return moment(link.createdAt).format("L");
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
export default createFragmentContainer(
  Link,
  graphql`
    fragment link_link on Link {
      title
      url
      createdAt
    }
  `
);
