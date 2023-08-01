import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: String
})

export const categoryCollection = new mongoose.model('Categories', categorySchema);