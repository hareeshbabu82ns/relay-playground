import { Environment, Network, RecordSource, Store } from "relay-runtime";
// import token from "./token";

const token = "39mdomdLkdimKdiKI&*#90<m&@)";

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      // Authorization: "Bearer " + token
    },
    body: JSON.stringify({ query: operation.text, variables })
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({ network, store });
