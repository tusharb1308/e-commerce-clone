import mongoose from "mongoose"

export const connectDB = ()=> {
    mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "e-commerce"
    })
    .then(()=>{ console.log("DB connected") })
    .catch((e)=>{ console.log(e) });
}