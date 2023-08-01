import { categoryModel } from "src/models/categoryList";

export class allCategories{
    categoryList: categoryModel[] = [
        {
          cat_id: 1,
          categoryName: "Tshirts"
        },
        {
          cat_id: 2,
          categoryName: "Shirts"
        },
        {
          cat_id: 3,
          categoryName: "Coat Pent"
        },
        {
          cat_id: 4,
          categoryName: "Mens"
        },
        {
          cat_id: 5,
          categoryName: "Womes"
        },
        {
          cat_id: 6,
          categoryName: "Kids"
        },
        {
          cat_id: 7,
          categoryName: "Shoes"
        },
        {
          cat_id: 8,
          categoryName: "Electronics"
        }
    ];
    getCategoryData(): categoryModel[]{
      return this.categoryList;
    }
}