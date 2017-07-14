import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from "graphql";

import mongoose from "mongoose";

const Link = mongoose.model("Link");

const LinkType = new GraphQLObjectType({
  name: "Link",
  fields: () => ({
    _id: { type: GraphQLString },
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
    links: {
      type: new GraphQLList(LinkType),
      resolve: () => Link.find({})
    }
  })
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
