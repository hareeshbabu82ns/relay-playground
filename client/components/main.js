import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: props.links ? props.links : [] };
  }
  render() {
    const links = this.state.links.map(link =>
      <li>
        <a href={link.url}>
          {link.title}
        </a>
      </li>
    );
    return (
      <ul>
        {links}
      </ul>
    );
  }
}

export default Main;
