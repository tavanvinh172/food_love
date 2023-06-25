import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  products = [] as any;
  
  constructor(private http: HttpClient, private service: ProductsService){}

  ngOnInit(){
    this.http.get('https://641028d1864814e5b648f368.mockapi.io/products').subscribe(
      (response) => {
        this.products = response
      }
    )
  }

  addToCart(index){
    let arrayString = localStorage.getItem('products');
    let productArr = JSON.parse(arrayString!) || [];
    productArr.push(this.products.at(index));
    arrayString = JSON.stringify(productArr);
    // Store the string in localStorage
    this.service.addToCart()
    localStorage.setItem('products', arrayString);
  }
}
