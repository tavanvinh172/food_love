import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ErrorInterceptorProvider } from './interceptors/error-handler.interceptor';
import { LoggingInterceptorProvider } from './interceptors/logging-handler.interceptor';
import { LoadingInterceptorProvider } from './interceptors/loading.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { materialComponent } from 'src/utils/helpers/installation';
import { FormGroupDirective } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AddProductDialogComponent } from './components/products/add-product-dialog/add-product-dialog.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { BodyComponent } from './common/body/body.component';
import * as Highcharts from 'highcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import HC_exporting from 'highcharts/modules/exporting';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ConfirmDialoggComponent } from './common/confirm-dialogg/confirm-dialogg.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { FilterByPipe } from './common/filter-by.pipe';
HC_exporting(Highcharts);

@NgModule({
  declarations: [
    AppComponent,
    AddProductDialogComponent,
    SidenavComponent,
    BodyComponent,
    ConfirmDialoggComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    materialComponent,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    FormGroupDirective,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    LoggingInterceptorProvider,
    LoadingInterceptorProvider,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
