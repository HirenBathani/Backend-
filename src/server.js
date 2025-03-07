import { app } from "./app.js";
import connectDB from "./db/index.js";
import "dotenv/config";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT || 3000}`);
    });
    app.get("/", (req, res) => {
      res.json({
        success: true,
        message: "Success",
      });
    });
  })
  .catch((err) => {
    console.error("MONGODB CONNECTION ERROR !!! ", err);
  });

/*

// import express from "express";

// const app = express();
// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.error("ERROR: ", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();

// */
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const port = 8000;

// // MongoDB connection string
// const mongoURI =
//   process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydatabase";

// // Connect to MongoDB using Mongoose
// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected successfully!"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
