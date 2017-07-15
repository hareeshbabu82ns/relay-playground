/**
 * @flow
 * @relayHash 7e659206e7ed8564c57f67918c101dfb
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type app_MainQueryResponse = {|
  +store: ?{| |};
|};
*/


/*
query app_MainQuery {
  store {
    ...main_store
    id
  }
}

fragment main_store on Store {
  id
  linkConnection(first: 50, query: "") {
    edges {
      node {
        id
        ...link_link
      }
    }
  }
}

fragment link_link on Link {
  title
  url
  createdAt
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "app_MainQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Store",
        "name": "store",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "main_store",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "app_MainQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "app_MainQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Store",
        "name": "store",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 50,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "query",
                "value": "",
                "type": "String"
              }
            ],
            "concreteType": "LinkConnection",
            "name": "linkConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "LinkEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Link",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "createdAt",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "linkConnection{\"first\":50,\"query\":\"\"}"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query app_MainQuery {\n  store {\n    ...main_store\n    id\n  }\n}\n\nfragment main_store on Store {\n  id\n  linkConnection(first: 50, query: \"\") {\n    edges {\n      node {\n        id\n        ...link_link\n      }\n    }\n  }\n}\n\nfragment link_link on Link {\n  title\n  url\n  createdAt\n}\n"
};

module.exports = batch;
