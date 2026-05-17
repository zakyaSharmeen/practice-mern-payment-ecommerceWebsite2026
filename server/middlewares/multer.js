// import multer from "multer";

// let uploadFiles;

// try {
//   const storage = multer.memoryStorage();

//   uploadFiles = multer({ storage }).array("files", 10);
// } catch (error) {
//   console.log("Multer Setup Error:", error.message);
// }

// export default uploadFiles;

// import multer from "multer";

// const storage = multer.diskStorage({});

// const uploadFiles = multer({
//   storage,
// }).array("files", 10);

// export default uploadFiles;
////////////////////////////////////////////////
// import multer from "multer";
// import path from "path";

// const storage = multer.memoryStorage(); // Use memory storage for streaming to Cloudinary

// const uploadFiles = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB limit
//   },
//   fileFilter: (req, file, cb) => {
//     // Only allow images
//     const allowedMimes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
//     if (allowedMimes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only image files are allowed"));
//     }
//   },
// }).array("files", 10);

// export default uploadFiles;
////////////////////////////////////////
import multer from "multer";

// Simpler memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

export default upload.array("files", 10);
