import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Ecommerce2026-zakya",
    });

    console.log("Mongo Db connected ---------Balle Balle");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
