// // import DataUriParser from "datauri/parser.js";
// // import path from "path";

// // const bufferGenerator = (file) => {
// //   const parser = new DataUriParser();

// //   const extName = path.extname(file.originalname).toString();

// //   return parser.format(extName, file.buffer);
// // };

// // export default bufferGenerator;

// import DataUriParser from "datauri/parser.js";
// import path from "path";

// const bufferGenerator = (file) => {
//   try {
//     const parser = new DataUriParser();

//     const extName = path.extname(file.originalname).toString();

//     return parser.format(extName, file.buffer);
//   } catch (error) {
//     console.log("Buffer Generator Error:", error.message);

//     return null;
//   }
// };

// export default bufferGenerator;
