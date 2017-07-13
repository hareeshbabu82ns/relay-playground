import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
  title: String,
  url: String
});

export default mongoose.model("Link", LinkSchema);
