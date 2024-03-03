import mongoose from "mongoose";

const mongodbURL =
  "mongodb+srv://durgamabhilash798:jerqpFck80dzovWg@cluster0.pxoggbh.mongodb.net/";

mongoose.connect(mongodbURL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

db.on("connected", () => {
  console.log("MongoDB connected successfully");
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

export default db;
