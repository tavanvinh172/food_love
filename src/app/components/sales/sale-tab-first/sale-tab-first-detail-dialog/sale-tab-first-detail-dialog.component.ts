import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sale-tab-first-detail-dialog',
  templateUrl: './sale-tab-first-detail-dialog.component.html',
  styleUrls: ['./sale-tab-first-detail-dialog.component.scss']
})
export class SaleTabFirstDetailDialogComponent {

  title?: string = 'Chú ý';

  subtitle?: string = 'Bạn có muốn tiếp tục không?';

  buttonConfirm?: string = 'Tiếp tục';

  buttonCancel?: string = 'Huỷ bỏ';

  isDelete?: boolean = false;

  isDelete2?: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SaleTabFirstDetailDialogComponent>,
    private dialog: MatDialog,
  ){

  }

  ngOnInit(){
    if(this.defaults?.title && this.defaults?.subtitle){
      this.title = this.defaults?.title;
      this.subtitle = this.defaults?.subtitle;
    }
    if(this.defaults?.buttonConfirm && this.defaults?.buttonCancel){
      this.buttonConfirm = this.defaults?.buttonConfirm;
      this.buttonCancel = this.defaults?.buttonCancel;
    }
    if(this.defaults?.isDelete){
      this.isDelete = this.defaults.isDelete;
    }
    if(this.defaults?.isDelete2){
      this.isDelete2 = this.defaults.isDelete2;
    }
  }

  onConfirm(): void{
    this.defaults.onConfirm();
    this.dialog.closeAll();
  }

  onClose(): void{
    this.dialogRef.close();
  }
}
