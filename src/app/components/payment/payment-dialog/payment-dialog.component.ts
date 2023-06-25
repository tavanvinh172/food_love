import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent {

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<PaymentDialogComponent>){}

  payment(){
    this.dialogRef.close();
    this.dialog.open(ConfirmDialogComponent, {
      width: '700px',
      height: 'auto',
    })
  }
}
