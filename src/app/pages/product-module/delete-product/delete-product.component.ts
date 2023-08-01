import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  deleteProductId: string = '';
  constructor(private route: ActivatedRoute, private ps: ProductServiceService) { }

  async ngOnInit() {

    this.route.params.subscribe((param) => {
      this.deleteProductId = param["id"];
    });
    console.log("product to be deleted: ", this.deleteProductId);

    try{
      await this.ps.deleteProduct(this.deleteProductId).then((res)=>{
        console.log("response: ", res);
      }).catch((err) => {
        console.log("error: ",err);
      })
    }
    catch(e){
      console.log("error: ", e);
    }

  }

}
