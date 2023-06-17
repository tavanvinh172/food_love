import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ProductModel } from 'src/app/models/products.model';
import { ProductsService } from './products.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { Router } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
  products: any;

  productsFilter: any;

  form?: UntypedFormGroup;

  allFood: number = 0;
  pagination: number = 1;

  searchTerm = '';

  constructor(private productService: ProductsService, private loader: NgxSpinnerService, 
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router
    ){

  }

  ngOnInit(){
    this.initForm();
    this.getAllProducts();
  }

  filterProducts(term: string) {
    term = term.toLowerCase().trim();
    this.productsFilter = this.products.filter((product) => {
      return product.foodName.toLowerCase().includes(term)
    })
  }

  initForm(){
    this.form = this.fb.group({
      // foodSearch: null,
      pageIndex: 1,
      pageSize: 6,
    })
  }
  
  get f(){
    return this.form?.controls;
  }
  addNewProduct(){
    this.dialog.open(AddProductDialogComponent,{
      height: 'auto',
      data: {
        products: this.products,
        title: 'Tạo mới sản phẩm',
        reloadTable: () => this.getAllProducts(),
      }
    })
  }

  getAllProducts(){
    this.loader.show();
    this.productService.getAllProductsPaging(this.form?.value).subscribe(
      it => {
        this.pagination = this.form?.get('pageIndex')?.value;
        this.products = it?.data;
        this.productsFilter = this.products;
        this.allFood = it?.count;
      }
      )
    this.loader.hide();
  }

  renderPage(event: number) {
    this.form?.get('pageIndex')?.setValue(event);
    this.getAllProducts();
  }

  editProduct(product: ProductModel){
    this.dialog.open(EditProductComponent,{
      height: 'auto',
      data: {
        product: product,
        title: 'Sửa thông tin sản phẩm',
        reloadTable: () => this.getAllProducts(),
      }
    })
  }

  handleDelete(id: string){
    this.dialog.open(ConfirmDialoggComponent, {
      disableClose: false,
      width: '400px',
      height: 'auto',
      data: {
       title: 'Xoá sản phẩm',
       subtitle: 'Bạn có muốn xoá sản phẩm này không',
       buttonConfirm: 'Xoá',
       buttonCancel: 'Đóng',
       isDelete: true,
       onConfirm: () => {
        this.productService.deleteFood(id).subscribe(
          {
            next: (response) => {

            },
            error: (err) => {
              this.toastrService.warning("Xoá thất bại", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
              console.log(err);
            },
            complete: () => {
              this.toastrService.success("Xoá thành công", "Thông báo", {
                positionClass: 'toast-bottom-right' 
              })
              this.getAllProducts();
            }
          }
        )
       }
      }
    })
  }

}
