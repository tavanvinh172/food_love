import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SaleTabFirstDetailDialogComponent } from '../sale-tab-first-detail-dialog/sale-tab-first-detail-dialog.component';

@Component({
  selector: 'app-sale-tab-first-detail',
  templateUrl: './sale-tab-first-detail.component.html',
  styleUrls: ['./sale-tab-first-detail.component.scss']
})
export class SaleTabFirstDetailComponent {

  order: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SaleTabFirstDetailComponent>,
    private dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit(){
    this.order = this.defaults.item;
    console.log(this.order);
  }

  editUser(){
    this.dialog.open(SaleTabFirstDetailDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        title: 'Sửa thông tin người mua hàng',
        onConfirm: () => {
          this.toastr.success('Đã sửa thành công', 'Thông báo', {
            positionClass: 'toast-bottom-right' 
          })
        }
      }
    })
  }

  onSuccess(){
    this.router.navigate(['/sales']);
    this.dialogRef.close();
    this.toastr.success('Đã sửa thành công', 'Thông báo', {
      positionClass: 'toast-bottom-right' 
    })
  }
}
