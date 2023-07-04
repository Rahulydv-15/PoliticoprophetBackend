import express from "express";
import { getAllArticles, createArticle, findArticle } from "../controllers/articleController.js";

const router = express.Router();

router.get("/articles", getAllArticles);
router.post("/compose", createArticle);
router.post("/find/:article", findArticle);

export default router;
