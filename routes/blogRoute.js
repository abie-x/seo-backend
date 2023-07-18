import express, { Router } from "express";
import { createBlog, getAllBlogs } from "../coltroller/blogController.js";

const router = express.Router()

router.get('/', getAllBlogs)
router.post('/create', createBlog)

export default router
