import { categoryCollection } from "../models/categorySchema.js";

export const getAllCategories = async (req, res) => {
    let categories = await categoryCollection.find({});
    if(categories.length == 0){
        await categoryCollection.create(
            {
                categoryName: "Tshirts"
            },
            {
                categoryName: "Shirts"
            },
            {
                categoryName: "Coat Pent"
            },
            {
                categoryName: "Mens"
            },
            {
                categoryName: "Womes"
            },
            {
                categoryName: "Kids"
            },
            {
                categoryName: "Shoes"
            },
            {
                categoryName: "Electronics"
            },
            {
                categoryName: "Footwears"
            }
        )
    }
    categories = await categoryCollection.find({});
    console.log("all categories are: ", categories);
    res.send(categories);
}