import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/products.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = environment.baseUrl + 'api/foods';

  private searchTerm = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) { }

  updateSearchTerm(term: string){
    this.searchTerm.next(term);
  }

  getSearchTerm() {
    return this.searchTerm.asObservable();
  }

  getAllProductsPaging(object: Object): Observable<any>{
    let url = this.baseUrl + '/paging';
    return this.httpClient.post<ProductModel[]>(url, object, {responseType: "json" });
  }

  getAllProducts(): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.get<ProductModel[]>(url);
  }
  
  addOrEditFood(object: ProductModel): Observable<any>{
    let url = this.baseUrl;
    return this.httpClient.post<ProductModel[]>(url, object, {responseType: "json"});
  }

  deleteFood(id: string):Observable<any>{
    let url = this.baseUrl + `/${id}`;
    return this.httpClient.delete<ProductModel>(url);
  }
}
