import express from "express";  // if type is module in package.json
import cors from "cors";
import bodyParser from 'body-parser';
// const express = require('express');    // if type is commonjs in package.json
import productRoute  from "./routes/productRoutes.js";
import categoryRoute from "./routes/categoryRoutes.js"
import colorRoute from "./routes/colorRoutes.js";
import { connectDB } from "./data/database.js";

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', productRoute);
app.use('/category', categoryRoute);
app.use('/color', colorRoute);

app.listen(5000, ()=>{
    console.log("server is running on 5000");
});