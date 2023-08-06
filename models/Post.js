import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  hindiBody: String,
  comments: [
    {
      username: String,
      comment: String,
      date: Date
    }
  ],
});


export default mongoose.model("Post", postSchema);
