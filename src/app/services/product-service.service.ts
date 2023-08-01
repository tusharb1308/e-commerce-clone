import { Injectable } from '@angular/core';
import { allProduct } from 'src/data/allProducts';
import { product } from 'src/models/productInterface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService{
  constructor(private productData: allProduct, private http: HttpClient) { }

  getAllProducts(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.http.get('http://localhost:5000')
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

  deleteProduct(prodId: string): Promise<any>{
    return new Promise(async (resolve, reject) => {
      this.http.delete('http://localhost:5000/deleteProduct/' + prodId)
      .toPromise()
      .then(
        res => {
          resolve(res);
        }
      ).catch(
        err => {
          resolve(err);
        }
      )
    })
  }

  updateProduct(prodId: string, updateProductData: any){
    let url = 'http://localhost:5000/updateProduct/' + prodId;
    console.log('url: ', url, 'json: ', updateProductData);
    return new Promise(async (resolve, reject) => {
      this.http.patch(url, updateProductData)
      .toPromise()
      .then(res => {
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      })
    })
  }

  addProduct(newProductData: any){
    let url = 'http://localhost:5000/addProduct/';
    return new Promise(async (resolve, reject) => {
      this.http.post(url, newProductData)
      .toPromise()
      .then(res => {
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      })
    })
  }

  getAllProductsByCategory(categoryId: string){
    let url = 'http://localhost:5000/viewAllProductByCategory/' + categoryId;
    return new Promise(async (resolve, reject) => {
      this.http.get(url)
      .toPromise()
      .then(res => {
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      })
    })
  }

  // viewProductByProdID(productID: string){
  //   let url = 'http://localhost:5000/viewProduct/' + productID;
  //   return new Promise(async (resolve, reject)=>{
  //     this.http.get(url)
  //     .toPromise()
  //     .then(res => {
  //       resolve(res);
  //     })
  //     .catch((err) => {
  //       resolve(err);
  //     })
  //   })
  // }

  viewProductByProdID(productID: string): Promise<any[] | undefined> {
    let url = 'http://localhost:5000/viewProduct/' + productID;;
    return this.http.get<any[]>(url).toPromise();
  }

}
