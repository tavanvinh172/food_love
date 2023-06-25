import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MapChart, Chart } from 'angular-highcharts';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardsService } from './dashboards.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductModel } from 'src/app/models/products.model';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  barChart?:Chart;

  options?: Highcharts.Options;

  trendingChart?: Chart;

  orderChart?: Chart;

  customerChart?: Chart;

  newCustomerChart?: Chart;

  horizontalBarChart?: Chart;

  datas: Object[] = [];

  products: ProductModel[] = [];

  key = 0;

  constructor(private dashboardService: DashboardsService, private router: Router) {

  }

  getCurrentRole(){
    return localStorage.getItem('role');
  }
  
  ngOnInit() {
    this.options = this.dashboardService.buildBarChart('Biểu đồ doanh thu',
      ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Thángs 9', 'Tháng 10','Tháng 11', 'Tháng 12'], '', 'Doanh Thu', [10, 2, 4, 0, 0, 10, 2, 4, 0, 0, 32,23]);
    
      this.barChart = new Chart(this.options)
    this.initTrendingChart();
    this.initOrderChart();
    this.initCustomerChart();
    this.intiNewCustomerChart();
    this.initHorizontalBarChart();
    this.products.push({
      'foodName': 'Hamburger',
      'price': 2000,
      'foodId': 1,
    },
    {
      'foodName': 'Hamburger',
      'price': 2000,
      'foodId': 1,
    },{
      'foodName': 'Hamburger',
      'price': 2000,
      'foodId': 1,
    },
    {
      'foodName': 'Hamburger',
      'price': 2000,
      'foodId': 1,
    },{
      'foodName': 'Hamburger',
      'price': 2000,
      'foodId': 1,
    }
    )
  }

  async initMap() {
    const geojson = await fetch('../../../../assets/mapDataJSON/gadm36_VNM_1.json').then(response => response.json());

    geojson.features.map((it: any) => {
      this.datas.push([it.properties.HASC_1, this.key, it.properties?.code1, it.properties?.NAME_1])
      // this.key++
    });
  }

  initHorizontalBarChart(){
    this.horizontalBarChart = new Chart({
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Doanh thu hàng tháng',
        align: 'left'
    },
    xAxis: {
        categories: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần 5'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' VNĐ'
    },
    plotOptions: {
        bar: {
            // borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
    },
    credits: {
        enabled: false
    },
      series: [{
          name: 'Tháng 6',
          data: [631, 727, 3202, 721, 26],
          color: '#4C6EF8'
      }] as any
    });
  }

  intiNewCustomerChart(){
    
    this.newCustomerChart = new Chart({
      
      chart: {
        type: 'area',
        zoomType: 'x',
        // panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600,
        },
        width: 270,
        height: 200,
    },
    
    title: {
        text: 'Người dùng mới',
        align: 'left'
    },
  
    xAxis: {
        labels: {
            format: 'Tháng {value}'
        },
        minRange: 5,
        title: {
            text: null
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 187.8km.'
        }
    },
  
    yAxis: {
        // startOnTick: true,
        // endOnTick: false,
        // maxPadding: 0.35,
        title: {
            text: null
        },
    },
  
    tooltip: {
        headerFormat: 'Tháng {point.x}<br>',
        pointFormat: '{point.y} VNĐ',
        shared: true
    },
  
    legend: {
        enabled: false
    },
  
    series: [{
        data: data,
        lineColor: '#FFFF',
        color: '#4C6EF8',
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
            enabled: false
        },
        threshold: null
    }] as any
      });
  }

  initCustomerChart(){
    
    this.customerChart = new Chart({
      
      chart: {
        type: 'area',
        zoomType: 'x',
        // panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600,
        },
        width: 270,
        height: 200,
    },
    
    title: {
        text: 'Khách hàng',
        align: 'left'
    },
  
    xAxis: {
        labels: {
            format: 'Tháng {value}'
        },
        minRange: 5,
        title: {
            text: null
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 187.8km.'
        }
    },
  
    yAxis: {
        // startOnTick: true,
        // endOnTick: false,
        // maxPadding: 0.35,
        title: {
            text: null
        },
    },
  
    tooltip: {
        headerFormat: 'Tháng {point.x}<br>',
        pointFormat: '{point.y} VNĐ',
        shared: true
    },
  
    legend: {
        enabled: false
    },
  
    series: [{
        data: data,
        lineColor: '#FFFF',
        color: '#4C6EF8',
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
            enabled: false
        },
        threshold: null
    }] as any
      });
  }

  initOrderChart(){
    
    this.orderChart = new Chart({
      
      chart: {
        type: 'area',
        zoomType: 'x',
        // panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600,
        },
        width: 270,
        height: 200,
    },
    
    title: {
        text: 'Đơn đặt',
        align: 'left'
    },
  
    xAxis: {
        labels: {
            format: 'Tháng {value}'
        },
        minRange: 5,
        title: {
            text: null
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 187.8km.'
        }
    },
  
    yAxis: {
        // startOnTick: true,
        // endOnTick: false,
        // maxPadding: 0.35,
        title: {
            text: null
        },
    },
  
    tooltip: {
        headerFormat: 'Tháng {point.x}<br>',
        pointFormat: '{point.y} VNĐ',
        shared: true
    },
  
    legend: {
        enabled: false
    },
  
    series: [{
        data: data,
        lineColor: '#FFFF',
        color: '#4C6EF8',
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
            enabled: false
        },
        threshold: null
    }] as any
      });
  }

  initTrendingChart(){

    this.trendingChart = new Chart({
      
    chart: {
      type: 'area',
      zoomType: 'x',
      // panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
          minWidth: 600,
      },
      width: 270,
      height: 200,
  },
  
  title: {
      text: 'Doanh thu',
      align: 'left'
  },

  xAxis: {
      labels: {
          format: 'Tháng {value}'
      },
      minRange: 5,
      title: {
          text: null
      },
      accessibility: {
          rangeDescription: 'Range: 0 to 187.8km.'
      }
  },

  yAxis: {
      // startOnTick: true,
      // endOnTick: false,
      // maxPadding: 0.35,
      title: {
          text: null
      },
  },

  tooltip: {
      headerFormat: 'Tháng {point.x}<br>',
      pointFormat: '{point.y} VNĐ',
      shared: true
  },

  legend: {
      enabled: false
  },

  series: [{
      data: data,
      lineColor: '#FFFF',
      color: '#4C6EF8',
      fillOpacity: 0.5,
      name: 'Elevation',
      marker: {
          enabled: false
      },
      threshold: null
  }] as any
    });
  }
}

export const data = [
  [1, 225000],
  [2, 225000],
  [3, 254000],
  [4, 325000],
  [5, 425000],
  [6, 625000],
  [7, 722500],
  [8, 725000],
  [9, 925000],
  [10, 1022500],
  [11, 3225000],
  [12, 2225000],
]