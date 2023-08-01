import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-side-category-bar',
  templateUrl: './side-category-bar.component.html',
  styleUrls: ['./side-category-bar.component.css']
})
export class SideCategoryBarComponent implements OnInit {
  allCategoryNames:any = [];

  constructor(private cs: CategoryServiceService) { }

  async ngOnInit() {
    try{
      await this.cs.getAllCategoryNames().then((res)=>{
        this.allCategoryNames = res;
        console.log("all categories are: ", this.allCategoryNames);
      }).catch((err)=>{
        console.log("error: ", err);
      })
    }
    catch(e){
      console.log("error: ", e);
    }
  }

}
