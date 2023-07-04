import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  body: String
});

export default mongoose.model("Post", postSchema);
