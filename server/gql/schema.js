import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from "graphql";

import {
  connectionDefinitions,
  connectionArgs,
  fromGlobalId,
  nodeDefinitions,
  connectionFromPromisedArray,
  mutationWithClientMutationId,
  globalIdField
} from "graphql-relay";

import mongoose from "mongoose";

const Link = mongoose.model("Link");

const LinkType = new GraphQLObjectType({
  name: "Link",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: obj => obj._id
    },
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    createdAt: {
      type: GraphQLString,
      resolve: obj => new Date(obj.createdAt).toISOString()
    }
  })
});
const CounterType = new GraphQLObjectType({
  name: "Counter",
  fields: () => ({
    counter: {
      type: GraphQLInt
    }
  })
});
let counter = 100;
const data = [{ counter: 33 }, { counter: 88 }, { counter: 43 }];

class Store {}
const store = new Store();

const nodeDefs = nodeDefinitions(
  globalId => {
    const { type } = fromGlobalId(globalId);
    return type === "Store" ? store : null;
  },
  obj => {
    return obj instanceof Store ? storeType : null;
  }
);

const storeType = new GraphQLObjectType({
  name: "Store",
  fields: () => ({
    id: globalIdField("Store"),
    linkConnection: {
      type: linkConnection.connectionType,
      args: {
        ...connectionArgs,
        query: { type: GraphQLString }
      },
      resolve: (parentValue, args) => {
        const findParams = {};
        if (args.query) {
          findParams.title = new RegExp(args.query, "i");
        }
        return connectionFromPromisedArray(
          Link.find(findParams).sort({ createdAt: -1 }).limit(args.first),
          args
        );
      }
    }
  }),
  interfaces: [nodeDefs.nodeInterface]
});
const linkConnection = connectionDefinitions({
  name: "Link",
  nodeType: LinkType
});
const createLinkMutation = mutationWithClientMutationId({
  name: "CreateLink",
  inputFields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) }
  },
  outputFields: {
    linkEdge: {
      type: linkConnection.edgeType,
      resolve: obj => ({ node: obj, cursor: obj._id })
    },
    store: {
      type: storeType,
      resolve: () => store
    }
  },
  mutateAndGetPayload: ({ title, url }) => {
    const link = new Link({ title, url, createdAt: Date.now() });
    return link.save();
  }
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: () => counter
      },
      data: {
        type: new GraphQLList(CounterType),
        resolve: () => data
      },
      node: nodeDefs.nodeField,
      store: {
        type: storeType,
        resolve: () => store
      }
    })
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
      incrimentCounter: {
        type: GraphQLInt,
        resolve: () => ++counter
      },
      createLink: createLinkMutation
    })
  })
});

export default schema;
