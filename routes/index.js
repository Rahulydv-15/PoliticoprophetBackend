import express from "express";
import { getAllArticles, createArticle, findArticle } from "../controllers/articleController.js";
import {getDeviceInfo} from '../controllers/deviceInfoController.js'
const router = express.Router();

router.get("/articles", getAllArticles);
router.post("/compose", createArticle);
router.post("/find/:article", findArticle);
router.post("/saveDeviceInfo",getDeviceInfo );


export default router;
