import express from "express";

import BlogController from "../Controller/BlogPostController.js";

import {verifyAuth} from "../Middleware/AuthVerification.js"

const router = express.Router();

router.post("/create",verifyAuth,BlogController.articles);

router.get("/all",verifyAuth,BlogController.getAllBlogs);

router.get("/one/:id",verifyAuth,BlogController.getOneBlog);

router.delete("/delete/:id",verifyAuth,BlogController.deleteOnePost);

// router.delete("/delete",verifyAuth,BlogController.deleteAllPosts);

router.patch("/update/:id",verifyAuth,BlogController.updateBlogPost);




export default router;