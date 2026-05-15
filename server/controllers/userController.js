import { UserModel } from "../models/User.js";
import { OTPModel } from "../models/Otp.js";

import jwt from "jsonwebtoken";
import TryCatch from "../utils/tryCatch.js";
import sendOtp from "../utils/sendOtp.js";

export const loginUser = TryCatch(async (req, res) => {
  const { email } = req.body;

  const subject = "Ecommerce App";

  const otp = Math.floor(Math.random() * 1000000);

  const prevOtp = await OTPModel.findOne({
    email,
  });

  if (prevOtp) {
    await prevOtp.deleteOne();
  }

  await sendOtp({ email, subject, otp });

  await OTPModel.create({ email, otp });

  res.json({
    message: `Otp sent to your mail ${email}`,
  });
});

export const verifyUser = TryCatch(async (req, res) => {
  const { email, otp } = req.body;

  const haveOtp = await OTPModel.findOne({
    email,
    otp,
  });

  if (!haveOtp)
    return res.status(400).json({
      message: "Wrong otp",
    });

  let user = await UserModel.findOne({ email });

  if (user) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC, {
      expiresIn: "15d",
    });

    await haveOtp.deleteOne();

    res.json({
      message: "User LoggedIn",
      token,
      user,
    });
  } else {
    user = await UserModel.create({
      email,
    });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SEC, {
      expiresIn: "15d",
    });

    await haveOtp.deleteOne();

    res.json({
      message: "User LoggedIn",
      token,
      user,
    });
  }
});

export const myProfile = TryCatch(async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  res.json(user);
});
