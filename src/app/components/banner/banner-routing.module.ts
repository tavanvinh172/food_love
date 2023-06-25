import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: BannerComponent }
        ]
    },
];

@NgModule({
    declarations: [BannerComponent],
    imports: [CommonModule, RouterModule.forChild(routes), materialComponent, HighchartsChartModule, ChartModule, AngularSvgIconModule],
    exports: [RouterModule]
})
export class BannerRoutingModule { }
