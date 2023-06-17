import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { ProductsComponent } from './products.component';
import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FilterByPipe } from 'src/app/common/filter-by.pipe';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ProductsComponent },
            { path: 'edit/:id', component: EditProductComponent }
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [ProductsComponent, EditProductComponent, FilterByPipe],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
