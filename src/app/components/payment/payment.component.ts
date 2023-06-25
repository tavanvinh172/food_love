import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  products = [] as any;

  constructor(private dialog: MatDialog,){

  }

  ngOnInit(){
    let arrayString = localStorage.getItem('products');
    let productArr = JSON.parse(arrayString!) || [];
    this.products = productArr;
  }

  payment(){
    this.dialog.open(PaymentDialogComponent, {
      width: '700px',
      height: '400px',
    });
  }
}
