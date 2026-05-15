import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";

export const isAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token)
      return res.status(403).json({
        message: "Please login",
      });

    const decodedData = jwt.verify(token, process.env.JWT_SEC);

    req.user = await UserModel.findById(decodedData._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "Please login",
    });
  }
};
