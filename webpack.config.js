module.exports = {
  entry: "./client/app.js",
  output: {
    path: __dirname + "/client",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: [
            ["relay", { schema: __dirname + "/server/gql/schema.graphql" }]
          ]
        }
      }
    ]
  }
};
