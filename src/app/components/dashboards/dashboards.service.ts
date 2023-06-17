import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { Chart } from 'angular-highcharts';

@Injectable({
  providedIn: 'root'
})
export class DashboardsService {
  constructor() {

  }

  buildPieChart(title: string, seriesName?: string, seriesData?: any): Highcharts.Options {
    return {
      chart: {
        type: 'pie',
      },
      title: {
        useHTML: true,
        text: title,
        style: { fontFamily: "Arial", textAlign: "center", 'fontSize': '16px' }

      },
      series: [
        {
          type: 'pie',
          name: seriesName,
          data: seriesData,
          size: '80%', // change this to adjust the width of the pie
          dataLabels:
            {
              // Outside label
              enabled: true,
              distance: 20,
              format: '{point.name}'
            } as Highcharts.SeriesPieDataLabelsOptionsObject,
        },
        {
          type: 'pie',
          name: seriesName,
          data: seriesData,
          size: '80%', // change this to adjust the width of the pie
          center: ['50%', '50%'], // change this to adjust the position of the pie
          dataLabels:
            {
              // Outside label
              enabled: true,
              distance: -50,
              format: '{point.percentage:.0f} %'
            } as Highcharts.SeriesPieDataLabelsOptionsObject,
        }
      ]
    }
  }

  buildBarChart(title: string, xAxis: string[], yAxisTitle: string, nameSeries: string, seriesData: number[]): Highcharts.Options {
    return {
      chart: {
        type: 'column',
        scrollablePlotArea: {
          minWidth: 1000,
      },
      },
      title: {
        useHTML: true,
        text: title,
        align: 'left',
        style: { fontFamily: "Arial", textAlign: "left", 'fontSize': '16px' }

      },
      xAxis: {
        categories: xAxis
      },
      yAxis: {
        title: {
          text: yAxisTitle
        }
      },
      tooltip: {
        shared: true
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            format: '{y}'
          }
        },
      },
      series: [
        {
          type: 'column',
          name: nameSeries,
          color: '#4C6EF8',
          data: seriesData,
        },
      ]
    }
  }

  buildSingleBarChart(title: string, xAxis: string[], yAxisTitle: string, nameSeries: string, seriesData: number[], seriesData2: number[], seriesData3: number[]): Highcharts.Options {
    return {
      chart: {
        type: 'column',
      },
      title: {
        useHTML: true,
        text: title,
        style: { fontFamily: "Arial", textAlign: "center", 'fontSize': '16px' }

      },
      // subtitle: {
      //   text: 'Source: Wikipedia.org',
      // },
      xAxis: {
        categories: xAxis,
      },
      yAxis: {
        title: {
          text: yAxisTitle
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'column',
          name: nameSeries,
          data: seriesData,
          dataLabels: {
            enabled: true,
            format: '{y}' // show percentage with one decimal place
          },
          color: '#4C6EF8'
        },
        // {
        //     type: 'column',
        //     name: nameSeries,
        //     data: seriesData2,
        //     dataLabels: {
        //         enabled: true,
        //         format: '{y:.1f}%' // show percentage with one decimal place
        //     },
        //     color: 'rgb(245, 170, 54)'

        // },
        // {
        //     type: 'column',
        //     name: nameSeries,
        //     data: seriesData3,
        //     dataLabels: {
        //         enabled: true,
        //         format: '{y:.1f}%' // show percentage with one decimal place
        //     },
        //     color: 'rgb(245, 170, 54)'

        // },
      ],
      legend: {
        enabled: false // hide the legend
      }
    };
  };
}
