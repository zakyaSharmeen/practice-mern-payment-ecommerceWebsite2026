import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  getAllOrders,
  getAllOrdersAdmin,
  getMyOrder,
  newOrderCod,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/order/new/cod", isAuth, newOrderCod);
router.get("/order/all", isAuth, getAllOrders);
router.get("/order/admin/all", isAuth, getAllOrdersAdmin);
router.get("/order/:id", isAuth, getMyOrder);

export default router;
