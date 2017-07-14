import React from "react";
import ReactDOM from "react-dom";
import Relay from "react-relay";

class Home extends React.Component {
  render() {
    return <div>Home</div>;
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));

console.log(Relay.QL`
query Links{
  links{
    title
  }
}
`);
