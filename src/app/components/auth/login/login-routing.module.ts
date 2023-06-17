import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormGroupDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { materialComponent } from 'src/utils/helpers/installation';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: LoginComponent }
        ]
    },
];

@NgModule({
    providers: [FormGroupDirective],
    declarations: [LoginComponent],
    imports: [RouterModule.forChild(routes), CommonModule, materialComponent],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
