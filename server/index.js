import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
// import cloudinary from "cloudinary";

//routes
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config({ quiet: true });

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
// routes
app.use("/api", userRoutes);
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
  connectDb();
});
