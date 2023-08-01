import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { product } from 'src/models/productInterface';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  categoryId: string = '';
  productsWithThisCategoryId: any = [];

  constructor(private ps: ProductServiceService, private route: ActivatedRoute) {
      this.route.paramMap.subscribe(()=> {
          this.ngOnInit();
      });
   }

  async ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.categoryId = data["id"];
    })
    console.log("category id is: ", this.categoryId);

    await this.ps.getAllProductsByCategory(this.categoryId).then((res) => {
      this.productsWithThisCategoryId = res;
    }).catch((err) => {
      console.log("error: ", err);
    })

    console.log("all products with this category are: ", this.productsWithThisCategoryId);
  }

}
