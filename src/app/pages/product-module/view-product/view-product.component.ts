import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  clickedProduct: any[] | undefined;
  clickedProductId: string  = '';
  constructor(private route: ActivatedRoute, private ps: ProductServiceService) { }

  ngOnInit() {
    this.getClickedProduct();
  }
  
  getClickedProduct(){
    this.route.params.subscribe((data) => {
      console.log("product id is: ", data["id"]);
      this.clickedProductId = data["id"];
    })

    this.ps.viewProductByProdID(this.clickedProductId).then((res)=>{
      this.clickedProduct = res;
      console.log("clicked product is: ", this.clickedProduct);
    }).catch((err)=>{
      console.log("error: ", err);
    })
  }
  
}
