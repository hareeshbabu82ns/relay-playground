import React from "react";
import Relay from "react-relay/classic";
import { debounce } from "lodash";

import Link from "./link";
import CreateLinkMutation from "./CreateLinkMutation";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", url: "" };
    this.search = debounce(this.search, 300);
  }
  setLimit = e => {
    const limit = Number(e.target.value);
    console.log(limit);
    this.props.relay.setVariables({ limit });
  };
  onSubmit = e => {
    e.preventDefault();
    Relay.Store.commitUpdate(
      new CreateLinkMutation({
        title: this.state.title,
        url: this.state.url,
        store: this.props.store
      })
    );
    this.setState({ title: "", url: "" });
  };
  search = query => {
    this.props.relay.setVariables({ query });
  };
  render() {
    const links = this.props.store.linkConnection.edges.map(edge =>
      <Link key={edge.node.id} link={edge.node} />
    );
    return (
      <div>
        <h3>Create Link</h3>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
          <input
            type="text"
            value={this.state.url}
            onChange={e => {
              this.setState({ url: e.target.value });
            }}
          />
          <button type="submit">Create</button>
        </form>
        Showing: &nbsp;
        <input
          type="text"
          placeholder="Search"
          onChange={e => {
            this.search(e.target.value);
          }}
        />
        <h3>Links</h3>
        <select
          onChange={this.setLimit}
          defaultValue={this.props.relay.variables.limit}
        >
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <ul>{links}</ul>
      </div>
    );
  }
}

export default Relay.createContainer(Main, {
  initialVariables: {
    limit: 50,
    query: ""
  },
  fragments: {
    store: () => Relay.QL`
      fragment on Store{
        id,
        linkConnection(first: $limit, query: $query){
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
