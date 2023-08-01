import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/models/productInterface';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cs: CategoryServiceService, private ps: ProductServiceService, private http: HttpClient) { }
  
  allProductsList: { _id?: string; productImg: string | null; productName: string | null; description: string | null; rating: number | null; price: number | null; categoryId: { _id: string; categoryName: string; }[] | null; color: { _id: string; name: string }[] | null; availability?: boolean; review?: string[]; }[] = [];
  updateProductId: string = '';
  productToBeUpdated: { _id?: string; productImg: string | null; productName: string | null; description: string | null; rating: number | null; price: number | null; categoryId: { _id: string; categoryName: string; }[] | null; color: { _id: string; name: string; }[] | null; availability?: boolean; review?: string[]; } | undefined;
  colorDropDownList = [
    {
      _id: '',
      name: ''
    }
  ]
  colorDropDownSelectedItems:any[] | null = [
  ];
  colorDropDownSettings:IDropdownSettings = {
    singleSelection: false,
    idField: '_id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true
  };

  categoryDropDownList = [
    {
      _id: '',
      categoryName: ''
    }
  ]

  categoryDropDownSelectedItems:any[] | null = [];

  categoryDropDownSettings:IDropdownSettings = {
    singleSelection: false,
    idField: '_id',
    textField: 'categoryName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true
  };

  addProductForm = new FormGroup({
    productImg: new FormControl(),
    productName: new FormControl(),
    description: new FormControl(),
    rating: new FormControl(),
    categories: new FormControl(),
    color: new FormControl(),
    price: new FormControl()
  })
  
  
  async ngOnInit() {
    await (
      new Promise(async (resolve, reject) => {
        this.http.get('http://localhost:5000/color')
        .toPromise()
        .then( res => {                     
            resolve(res);
          }
        ).catch( err => {                        
            resolve(err);
          }
        );
      })
    ).then((res) => {
      this.colorDropDownList = res as { _id: string; name: string; }[];;
      console.log("all colors client side: ", this.colorDropDownList);
    })
 
    await this.cs.getAllCategoryNames().then((res)=>{
      this.categoryDropDownList = res;
      console.log("all category client side: ", this.categoryDropDownList);
    }).catch((err) => {
      console.log("error: ", err);
    });

    this.route.params.subscribe(data => {
      this.updateProductId = data["id"];
    })
    
    if(this.updateProductId != undefined){
      console.log("update product id: ", typeof(this.updateProductId), this.updateProductId);
      await this.ps.getAllProducts().then((res)=>{
        this.allProductsList = res;
        console.log("all products are: ", this.allProductsList);
      }).catch((err: any)=>{
        console.log("error: ", err);
      })
      this.allProductsList.forEach((product: { _id?: string; productImg: string | null; productName: string | null; description: string | null; rating: number | null; price: number | null; categoryId: { _id: string; categoryName: string; }[] | null; color: { _id: string; name: string; }[] | null; productId?: number; availability?: boolean; review?: string[]; }) => {
        if(product._id == this.updateProductId){
          this.productToBeUpdated = product;
          console.log("product to be updated is: ", this.productToBeUpdated);
          this.addProductForm.controls['productImg'].setValue(product.productImg);
          this.addProductForm.controls['productName'].setValue(product.productName);
          this.addProductForm.controls['description'].setValue(product.description);
          this.addProductForm.controls['rating'].setValue(product.rating);
          this.addProductForm.controls['price'].setValue(product.price);
          this.categoryDropDownSelectedItems = product.categoryId;
          this.colorDropDownSelectedItems = product.color;
          return;
        }
      })
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  async onSubmit(){
    let newProductData = {
      categoryId: this.addProductForm.controls.categories.value,
      productName: this.addProductForm.controls.productName.value,
      description: this.addProductForm.controls.description.value,
      rating: this.addProductForm.controls.rating.value,
      price: this.addProductForm.controls.price.value,
      productImg: this.addProductForm.controls.productImg.value,
      availability: true,
      color: this.addProductForm.controls.color.value,
      review: ["nice"]
    }

    console.log("new product is: ", newProductData);
    
    await this.ps.addProduct(newProductData).then((res)=>{
      console.log("message: ", res);
    }).catch((err)=>{
      console.log("error: ", err);
    })
  }

  async onUpdate(){
    let updateProductData: {productImg: string; productName: string; description: string; rating: number; price: number; categoryId: { _id: string; categoryName: string; }[]; color: { _id: string; name: string }[]; availability: boolean; review: string[]; } = {
      categoryId: this.addProductForm.controls.categories.value ?? [{_id: '', categoryName: ''}],
      productName: this.addProductForm.controls.productName.value ?? '',
      description: this.addProductForm.controls.description.value ?? '',
      rating: this.addProductForm.controls.rating.value ?? 0,
      price: this.addProductForm.controls.price.value ?? 0,
      productImg: this.addProductForm.controls.productImg.value ?? '',
      availability: this.productToBeUpdated?.availability! ?? true,
      color: this.addProductForm.controls.color.value ?? [{_id: '', name: ''}],
      review: this.productToBeUpdated?.review! ?? ['']
    }

    await this.ps.updateProduct(this.updateProductId, updateProductData).then((res)=>{
      console.log("message: ", res);
    }).catch((e) => {
      console.log("error: ", e);
    })
  }
}
