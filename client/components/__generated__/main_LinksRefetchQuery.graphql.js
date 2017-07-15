/**
 * @flow
 * @relayHash ef634ddc076f069240fc37154a5b57ad
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type main_LinksRefetchQueryResponse = {|
  +store: ?{| |};
|};
*/


/*
query main_LinksRefetchQuery(
  $limit: Int
  $query: String
) {
  store {
    ...main_store_3HzzW
    id
  }
}

fragment main_store_3HzzW on Store {
  id
  linkConnection(first: $limit, query: $query) {
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
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "limit",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "query",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "main_LinksRefetchQuery",
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
            "args": [
              {
                "kind": "Variable",
                "name": "limit",
                "variableName": "limit",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
                "type": null
              }
            ]
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
  "name": "main_LinksRefetchQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "limit",
        "type": "Int",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "query",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "main_LinksRefetchQuery",
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
                "kind": "Variable",
                "name": "first",
                "variableName": "limit",
                "type": "Int"
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query main_LinksRefetchQuery(\n  $limit: Int\n  $query: String\n) {\n  store {\n    ...main_store_3HzzW\n    id\n  }\n}\n\nfragment main_store_3HzzW on Store {\n  id\n  linkConnection(first: $limit, query: $query) {\n    edges {\n      node {\n        id\n        ...link_link\n      }\n    }\n  }\n}\n\nfragment link_link on Link {\n  title\n  url\n  createdAt\n}\n"
};

module.exports = batch;
