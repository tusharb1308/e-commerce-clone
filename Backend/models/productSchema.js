import mongoose from "mongoose";

// schema is basically data-unit/object structure which stores objects properties name and its data type
const productSchema = new mongoose.Schema({
    categoryId: Object,
    productName: String,
    description: String,
    rating: Number,
    price: Number,
    productImg: String,
    availability: Boolean,
    color: Object,
    review: Object
});

// model is basically specific storage/file/collection which stores a particular schema like data like users data, products data etc
export const productCollection = new mongoose.model('Products', productSchema);