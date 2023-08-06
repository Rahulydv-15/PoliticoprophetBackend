import express from "express";
import { getAllArticles, createArticle, findArticle, deleteArticle, addComment } from "../controllers/articleController.js";
import {getDeviceInfo} from '../controllers/deviceInfoController.js'
import { getCountAndInfoUsers } from "../controllers/deviceInfoController.js";
const router = express.Router();

router.get("/articles", getAllArticles);
router.post("/compose", createArticle);
router.post("/find/:article", findArticle);
router.post("/saveDeviceInfo",getDeviceInfo );
router.get("/getUserInfo",getCountAndInfoUsers);
router.post("/deleteArticle",deleteArticle);
router.post("/addComment",addComment);

export default router;
