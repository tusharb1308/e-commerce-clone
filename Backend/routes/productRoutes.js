import express  from "express";
import { getAllProducts, 
        addNewProduct, 
        viewAllProduct, 
        viewAllProductByCategory,
        viewProductByProductId,
        updateProduct,
        deleteProduct } from "../controllers/product.js";

const router = express.Router();

router.get('/', getAllProducts);
router.post('/addProduct', addNewProduct);
router.get('/viewAllProduct', viewAllProduct);
router.get('/viewAllProductByCategory/:id', viewAllProductByCategory);
router.get('/viewProduct/:id', viewProductByProductId);
router.patch('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

export default router;