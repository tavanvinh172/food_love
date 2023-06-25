import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './navigation';
import { Router, RouterLinkActive } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from './components/products/products.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartComponent } from './components/cart/cart.component';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'windfood_ver1';

  isSideNavCollapsed = false;

  numberOfItems?: number = 0;

  screenWidth = 0;

  dataStorage = localStorage.getItem('token');

  constructor(private service: ProductsService, private dialog: MatDialog){

  }

  ngOnInit(){
    this.service.items$.subscribe(items =>{
      this.numberOfItems = items.length;
    })
  }

  navigateToCart(){
    this.dialog.open(CartComponent,
      {
        width: '800px',
        height: '550px'
      }
    )
  }

  isLogin() : boolean{
    return !!localStorage.getItem('token');
  }

  getCurrentRole(){
    return localStorage.getItem('role');
  }

  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
