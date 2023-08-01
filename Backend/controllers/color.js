import { colorCollection } from "../models/colorSchema.js";

export const getAllColors = async (req, res)=>{
    let colors = await colorCollection.find({});
    if(colors.length == 0){
        await colorCollection.create(
            { name: "Red" },
            { name: "Blue" },
            { name: "Green" },
            { name: "White" },
            { name: "Yellow" },
            { name: "Black" },
            { name: "Purple" },
            { name: "Pink" },
            { name: "Orange" },
            { name: "Brown" },
        )
    }
    colors = await colorCollection.find({});
    console.log("all colors api side: ", colors);
    res.send(colors);
}