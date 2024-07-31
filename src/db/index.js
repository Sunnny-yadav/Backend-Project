// require('dotenv').config({path : '../../.env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./env",
});
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    // console.log(connectionInstance);
    console.log(
      "Database connected successfully:: DB host ::",
      connectionInstance.connection.name,
    );
    
  } catch (error) {
    
    console.log("Error : src/db/index.js (failed to connect Mongodb", error);
  }
};

export default connectDB;
