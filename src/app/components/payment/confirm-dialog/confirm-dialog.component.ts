import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor( private dialogRef: MatDialogRef<ConfirmDialogComponent>, private router: Router){

  }

  navigateToHome(){
    this.router.navigate(['']);
    localStorage.removeItem('products');
    this.dialogRef.close();
  }
}
