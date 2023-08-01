import { productCollection } from "../models/productSchema.js";

export const getAllProducts = async (req, res)=>{
    // await productCollection.create({
    //     categoryId: [],
    //     productName: "Furniture",
    //     description: "Part wear",
    //     rating: 4,
    //     price: 300,
    //     productImg: "https://m.media-amazon.com/images/I/71K7YCpzhdL._AC_UL400_.jpg",
    //     availability: true,
    //     color: [],
    //     review: ["good to wear", "nice", "awesome"],
    // }).then(()=>{
    //     res.send({
    //         success: true,
    //         data: 'data succesfully added'
    //     });
    // });

    var result = await productCollection.find({});
    res.send(result);
}

export const addNewProduct = async (req, res) => {
    await productCollection.create(req.body).then(()=>{
        res.send("new product added");
    }).catch((e) => {
        res.send(e);
    });
}

export const viewAllProduct = async (req, res) => {
    res.send(
        await productCollection.find({})
    )
}

export const viewAllProductByCategory = async (req, res) => {
    res.send(
        await productCollection.find({ "categoryId._id": req.params.id })
    )
}

export const viewProductByProductId = async (req, res) => {
    res.send(
        await productCollection.find({ _id: req.params.id })
    )
}

export const updateProduct = async (req, res) => {
    const data = req.body;
    await productCollection.updateOne({
        _id: req.params.id
    },
    {
        $set: data 
    }).then(()=>{
        res.send({
            success: true,
            message: "product updated"
        })
    }).catch((e)=>{
        res.send({
            success: false,
            message: e
        })
    })
    // if done post api
    // {
    //     productId: req.body.productId,
    //     categoryId: req.body.categoryId,
    //     productName: req.body.productName,
    //     description: req.body.description,
    //     rating: req.body.rating,
    //     price: req.body.price,
    //     productImg: req.body.productImg,
    //     availability: req.body.availability,
    //     color: req.body.color,
    //     review: req.body.review
    // }
}

export const deleteProduct = async (req, res) => {
    await productCollection.deleteOne({
        _id: req.params.id
    }).then(()=>{
        res.send({
            success: true,
            message: "product deleted"
        })
    }).catch(e => {
        res.send(e);
    })
}