import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  quauntity: {
    type: Number,
    required: Number,
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const CartModel = mongoose.model("Cart", cartSchema);
