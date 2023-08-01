import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  allProductsList: any  = [];
  constructor(private ps: ProductServiceService) { }

  async ngOnInit() {
    await this.ps.getAllProducts().then((res)=>{
      this.allProductsList = res;
      console.log("all products: ", this.allProductsList);
    })
    
  }

}
