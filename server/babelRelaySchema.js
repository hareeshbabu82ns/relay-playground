import fs from "fs";
import path from "path";
import { graphql } from "graphql";
import { introspectionQuery, printSchema } from "graphql";

import Link from "./mongodb/links";

// Assume your schema is in ./gql/schema
import schema from "./gql/schema";
const yourSchemaPath = path.join(__dirname, "./gql/schema");
// console.log(schema);
// Save JSON of full schema introspection for Babel Relay Plugin to use
graphql(schema, introspectionQuery)
  .then(result => {
    fs.writeFileSync(`${yourSchemaPath}.json`, JSON.stringify(result, null, 2));
    // Save user readable type system shorthand of schema
    fs.writeFileSync(`${yourSchemaPath}.graphql`, printSchema(schema));
    console.log("Schema File Created");
  })
  .catch(err => {
    console.log(err);
  });
