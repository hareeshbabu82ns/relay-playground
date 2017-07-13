import express from "express";
import mongoose from "mongoose";

import LinkModel from "./mongodb/links";

const PORT = process.env.PORT || 3000;
const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb://testdb:testdb@ds139879.mlab.com:39879/lyricaldb";

const app = express();

app.use(express.static("client"));

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, err => {
  if (err) return console.log(`Unable to Connect to MongoDB: ${err}`);
  app.listen(PORT, () => {
    console.log(`App Started at Port ${PORT}`);
  });
});

app.get("/data/links", (req, res) => {
  LinkModel.find({}, (err, links) => {
    if (err) throw err;
    res.json(links);
  });
});
