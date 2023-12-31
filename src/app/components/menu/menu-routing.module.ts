import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { FormGroupDirective } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { FilterByPipe } from 'src/app/common/filter-by.pipe';
import { MenuComponent } from './menu.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: MenuComponent },
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [MenuComponent],
    imports: [CommonModule,RouterModule.forChild(routes), materialComponent, HttpClientModule, ToastrModule, NgxPaginationModule],
    exports: [RouterModule]
})
export class MenuRoutingModule { }
