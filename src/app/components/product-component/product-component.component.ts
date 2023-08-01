import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/models/productInterface';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  @Input() productsList: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.productsList);
  }

}
