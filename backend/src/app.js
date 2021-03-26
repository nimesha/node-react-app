import express from "express";
import cors from 'cors';
const app = express();

import bodyParser from "body-parser";
import Mongoose from "mongoose";

import { MONGO_URL } from "./config/index.js";

app.use(cors())

//middleware
app.use(bodyParser.json());

// // Routers File Paths
import galleryUploder from "./api/router/photo.js";

// // Router's URl paths

app.use("/", galleryUploder);

// DB connection
Mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (error) => {
    if (!error) {
      console.log("Success");
    } else {
      console.log(error);
    }
  }
);

export default app;
