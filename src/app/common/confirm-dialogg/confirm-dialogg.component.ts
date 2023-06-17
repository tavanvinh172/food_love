import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirm-dialogg',
  templateUrl: './confirm-dialogg.component.html',
  styleUrls: ['./confirm-dialogg.component.scss']
})
export class ConfirmDialoggComponent {

  title?: string = 'Chú ý';

  subtitle?: string = 'Bạn có muốn tiếp tục không?';

  buttonConfirm?: string = 'Tiếp tục';

  buttonCancel?: string = 'Huỷ bỏ';

  isDelete?: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ConfirmDialoggComponent>,
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
  }

  onConfirm(): void{
    this.defaults.onConfirm();
    this.dialog.closeAll();
  }

  onClose(): void{
    this.dialogRef.close();
  }
}
