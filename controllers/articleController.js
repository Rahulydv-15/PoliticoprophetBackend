import _ from "lodash";
import Post from "../models/Post.js";

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Post.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createArticle = async (req, res) => {
  try {
    const { title, body,hindiBody } = req.body;
    const post = new Post({
      title,
      body,
      hindiBody
    });
    await post.save();
    res.status(201).json({ message: "Article created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const findArticle = async (req, res) => {
  try {
    const { article } = req.params;
    const tit = _.lowerCase(article);
    const post = await Post.findOne({ title: { $regex: tit, $options: 'i' } });

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteArticle = async (req, res) => {
  try {
    const tit = _.lowerCase(req.body.title);

    const deletedArticle = await Post.findOneAndDelete({ title: { $regex: tit, $options: 'i' } });

    if (deletedArticle) {
      res.status(200).json({ message: "Article deleted successfully" });
    } else {
      res.status(404).json({ error: "Article not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
