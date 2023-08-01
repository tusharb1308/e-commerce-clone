export interface product{
    productId: number;
    categoryId: any[] | null;
    productName: string;
    description: string;
    rating: number;
    price: number;
    productImg: string;
    availability: boolean;
    color: any[] | null;
    review: string[];
}