import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
  title: String,
  url: String,
  createdAt: Date
});

export default mongoose.model("Link", LinkSchema);
