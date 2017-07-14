const plugin = require("babel-relay-plugin");
const schema = require("../server/gql/schema.json").data;

module.exports = plugin(schema);
