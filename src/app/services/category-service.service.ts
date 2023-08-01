import { Injectable } from '@angular/core';
import { allCategories } from 'src/data/allCategories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryServiceService {
  constructor(private catData: allCategories, private http: HttpClient) { }

  getAllCategoryNames(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.http.get('http://localhost:5000/category')
      .toPromise()
      .then(
        res => {                     
          resolve(res);
        }
      ).catch(
        err => {                        
          resolve(err);
        }
      );
    });
  }
}
