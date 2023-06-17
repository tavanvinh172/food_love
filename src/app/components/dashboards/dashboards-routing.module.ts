import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { DashboardsComponent } from './dashboards.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: DashboardsComponent }
        ]
    },
];

@NgModule({
    declarations: [DashboardsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), materialComponent, HighchartsChartModule, ChartModule, AngularSvgIconModule],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
