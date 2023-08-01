import { product } from "src/models/productInterface";

export class allProduct{

    products: product[] = [
        {
          "productId": 1,
          "categoryId": [{cat_id: 1, categoryName: "Tshirts"}, {cat_id:2, categoryName: "Shirts"}],
          "productName": "Ck Tshirt",
          "description": "Part wear",
          "rating": 4,
          "price": 300,
          "productImg": "https://m.media-amazon.com/images/I/71GITfTSeRL._AC_UL400_.jpg",
          "availability": true,
          "color": [{item_id: 1, item_text: "red"}, {item_id: 2, item_text: "blue"}],
          "review": ["good to wear", "nice", "awesome"],
        },
        {
          productId: 2,
          categoryId: [{cat_id:2, categoryName: "Shirts"}, {cat_id:3, categoryName: "Coat Pent"}, {cat_id: 4, categoryName:"Mens"}],
          productName: "Formal Shirts",
          description: "Part wear",
          rating: 4,
          price: 360,
          productImg: "https://m.media-amazon.com/images/I/61X9WBQlceL._AC_UL400_.jpg",
          availability: true,
          color: [{item_id: 1, item_text: "red"}, {item_id: 2, item_text: "blue"}],
          review: ["good to wear", "nice", "awesome"],
        },
        {
          productId: 3,
          categoryId: [{cat_id: 4, categoryName:"Mens"}, {cat_id: 5, categoryName: "Kids"}],
          productName: "Furniture",
          description: "Part wear",
          rating: 4,
          price: 300,
          productImg: "https://m.media-amazon.com/images/I/71K7YCpzhdL._AC_UL400_.jpg",
          availability: true,
          color: [{item_id: 1, item_text: "red"}, {item_id: 2, item_text: "blue"}],
          review: ["good to wear", "nice", "awesome"],
        },
        {
          productId: 4,
          categoryId: [{cat_id: 5, categoryName: "Kids"}],
          productName: "Furniture",
          description: "Part wear",
          rating: 4,
          price: 300,
          productImg: "https://m.media-amazon.com/images/I/51e0Afiv6qL._AC_UL600_FMwebp_QL65_.jpg",
          availability: true,
          color: [{item_id: 1, item_text: "red"}, {item_id: 2, item_text: "blue"}],
          review: ["good to wear", "nice", "awesome"],
        },
        {
          productId: 5,
          categoryId: [{cat_id: 5, categoryName: "Kids"}, {cat_id: 6, categoryName: "Kids"}],
          productName: "Headphones",
          description: "Part wear",
          rating: 4,
          price: 300,
          productImg: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/329b8e2b-6ac7-4a3b-a760-5e1ce0249f93._CR0%2C0%2C1503%2C1500_SX375_SY375_.jpg",
          availability: true,
          color: [{item_id: 1, item_text: "red"}, {item_id: 2, item_text: "blue"}],
          review: ["good to wear", "nice", "awesome"],
        },
        {
          productId: 6,
          categoryId: [{cat_id: 4, categoryName:"Mens"}, {cat_id: 6, categoryName: "Kids"}, {cat_id:7, categoryName: "Electronics"}],
          productName: "Laptops",
          description: "Part wear",
          rating: 4,
          price: 300,
          productImg: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c4b70438-7f2b-4e61-a5bd-f9d34145e3f6._CR0,0,1200,628_SX507_QL70_.jpg",
          availability: true,
          color: [{item_id: 1, item_text: "red"}, {item_id: 2, item_text: "blue"}],
          review: ["good to wear", "nice", "awesome"],
        },
        {
          productId: 7,
          categoryId: [{cat_id: 1, categoryName: "Tshirts"}, {cat_id: 2, categoryName: "Shirts"}],
          productName: "Mobiles",
          description: "Part wear",
          rating: 4,
          price: 300,
          productImg: "https://m.media-amazon.com/images/I/61Cp0KmXsrL._AC_UY218_.jpg",
          availability: true,
          color: [{item_id: 1, item_text: "Red"}, {item_id: 2, item_text: "Blue"}],
          review: ["good to wear", "nice", "awesome"],
        }
    ]

    getAllProducts(){
      localStorage.setItem("allProducts", JSON.stringify(this.products));
    }
}