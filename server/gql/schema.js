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
  connectionFromPromisedArray
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
    url: { type: GraphQLString }
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

const store = {};
const storeType = new GraphQLObjectType({
  name: "Store",
  fields: () => ({
    linkConnection: {
      type: linkConnection.connectionType,
      args: connectionArgs,
      resolve: (parentValue, args) =>
        connectionFromPromisedArray(Link.find({}).limit(args.first), args)
    }
  })
});
const linkConnection = connectionDefinitions({
  name: "Link",
  nodeType: LinkType
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
      }
    })
  })
});

export default schema;
