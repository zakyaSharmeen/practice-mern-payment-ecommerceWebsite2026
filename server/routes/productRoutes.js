import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import uploadFiles from "../middlewares/multer.js";
import { createProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/product/new", isAuth, uploadFiles, createProduct);

export default router;
