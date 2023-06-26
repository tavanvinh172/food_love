import { Component } from '@angular/core';
import { FormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  products = [] as any;

  form?: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private dialogRef: MatDialogRef<CartComponent>, private router: Router){}

  ngOnInit(){
    let arrayString = localStorage.getItem('products');
    let productArr = JSON.parse(arrayString!) || [];
    this.products = productArr;

    this.form = this.fb.group({
      formArr: this.fb.array([])
    });
    if(this.products){
      this.products.forEach(element => {
        let foodCard = this.fb.group({
          nameProduct: element?.nameProduct,
          price: element?.price,
          quantity: 1,
          img: element?.img
        });        
        this.f.push(foodCard);
        console.log(this.f);
        
      });
    }
  }

  increaseValue(index){
    let quantity = this.f.at(index).get('quantity')?.value
    if(quantity >= 0){
      this.f.at(index).get('quantity')?.setValue(quantity + 1);
    }
  }

  decreaseValue(index){
    let quantity = this.f.at(index).get('quantity')?.value
    if(quantity !== 0){
      this.f.at(index).get('quantity')?.setValue(quantity - 1);
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

  natigateToPayment(){
    this.router.navigate(['/payment']);
    this.closeDialog();
  }

  get f(){
    return this.form?.controls['formArr'] as FormArray;
  }

}
