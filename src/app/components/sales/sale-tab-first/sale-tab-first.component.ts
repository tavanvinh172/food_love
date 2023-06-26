import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogSecondComponent } from 'src/app/common/confirm-dialog-second/confirm-dialog-second.component';
import { ConfirmDialoggComponent } from 'src/app/common/confirm-dialogg/confirm-dialogg.component';
import { SaleTabFirstDetailComponent } from './sale-tab-first-detail/sale-tab-first-detail.component';

@Component({
  selector: 'app-sale-tab-first',
  templateUrl: './sale-tab-first.component.html',
  styleUrls: ['./sale-tab-first.component.scss']
})
export class SaleTabFirstComponent {

  form?: UntypedFormGroup;

  orderList = [] as any;

  orderListCopy = [] as any;

  orderFilter?: any = '';

  dateOrder?: any = '';

  date = new Date();

  constructor(private fb: UntypedFormBuilder, private http: HttpClient, private dialog: MatDialog, private toastr: ToastrService, private router: Router){}

  ngOnInit(){
    this.form = this.fb.group({
      id: null,
      date: null
    });

    console.log(this.date.getDate());
    
    console.log(this.dateOrder);
    

    this.http.get('https://641028d1864814e5b648f368.mockapi.io/order').subscribe(
      (response) => {
        this.orderList = response;
        this.orderListCopy = this.orderList;
      }
    )
  }


  filterOrder(term: string) {
    term = term.toLowerCase().trim();
    this.orderListCopy = this.orderList.filter((order) => {
      return order.idOrder.toLowerCase().includes(term)
    })
  }

  filterByDate(term) {
    term = term.toString().toLowerCase().trim();
    this.orderListCopy = this.orderList.filter((order) => {
      return order.date.toString().toLowerCase().includes(term)
    })
  }

  watchDetail(item){
    this.dialog.open(SaleTabFirstDetailComponent, {
      width: '100%',
      height: '100%',
      data: {
        item: item
      }
    })
    // this.router.navigate(['sales/order-detail'], {state: {data: item}});
  }

  handleDelete(index){
    this.dialog.open(ConfirmDialogSecondComponent, {
      disableClose: false,
      width: '400px',
      height: 'auto',
      data: {
       title: 'Xoá đơn hàng',
       subtitle: 'Bạn có muốn xoá đơn hàng này không',
       buttonConfirm: 'Xoá',
       buttonCancel: 'Đóng',
       isDelete2: true,
       isDelete: false,
       onConfirm: () => {
        this.orderListCopy.splice(index, 1);
        this.toastr.success("Đã xoá thành công", "Thông báo", {
          positionClass: 'toast-bottom-right' 
        })
       }
      }
    })
  }
}
