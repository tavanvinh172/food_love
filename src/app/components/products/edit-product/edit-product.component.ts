import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  imageSrc?: string;

  product?: ProductModel;

  form?: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EditProductComponent>,
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private service: ProductsService
    ){
      
    }
    
    ngOnInit(){
      this.product = this.defaults.product;
      this.initForm();
    }

    get f(){
      return this.form?.controls;
    }
    
    initForm(){
      this.form = this.fb.group({
        foodId: null,
        foodName: null,
        price: null, 
        quantity: null,
        urlImg: null,
        description: null,
        createDate: null
      });
        this.imageSrc = this.product?.urlImg;
        let object = {
          foodId: this.product?.foodId,
          foodName: this.product?.foodName,
          price: this.product?.price,
          quantity: this.product?.quantity != 0 ? 1 : 0,
          urlImg: '',
          description: this.product?.description,
          createDate: this.product?.createDate,
        } as ProductModel;
        this.form?.setValue(object);
    };

    onSubmit(){
      this.dialog.open(ConfirmDialoggComponent, {
        disableClose: false,
        width: '400px',
        data: {
         products: this.defaults.products,
         isDelete: false,
         onConfirm: () => {
          let data = this.form?.getRawValue() as ProductModel;
          data.urlImg = this.imageSrc;
          this.service.addOrEditFood(data).subscribe({
            next: (response) => {
              if(response){
                this.toastrService.success("Đã thêm thành công", "Thông báo", {
                  positionClass: 'toast-bottom-right' 
                })
                this.defaults.reloadTable();
              }              
            },
            error: (err) => {
              this.toastrService.warning("Thêm thất bại", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
            }
          })
         }
        }
      })
    }

    onClose(){
      this.dialogRef.close();
    }

    onFileChange(event: any) {
      const reader = new FileReader();
      
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
      
        reader.onload = () => {
          this.imageSrc = reader.result as string;
        };
     
      }
    }
}
