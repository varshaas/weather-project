import { Component, Input, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data: any
  dayData: any = []
  highTempData: any = []
  lowTempData: any = []
  constructor() { }

  ngOnInit(): void {
    this.data.forEach((element: any) => {
      this.dayData.push(element.date)
      this.highTempData.push(element.high)
      this.lowTempData.push(element.low)
    });
  }

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: this.highTempData, label: 'High' },
    { data: this.lowTempData, label: 'Low' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = this.dayData;

  // Define chart options
  
  lineChartOptions: ChartOptions = {
    responsive: true,
      tooltips: {
        callbacks: {
          footer: (tooltipItem: any, data: any) => {
            this.data.forEach((element: any, i: number) => {
              if(tooltipItem[0].index === i){
                tooltipItem[0]["text"] = element.text
              }
              
            });
            return ' Condition: ' + tooltipItem[0].text
          }
        }
      }
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType: any = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event?: any, active?: any }): void {
    // console.log(event, active);
  }

  chartHovered({ event, active }: { event?: any, active?: any }): void {
    // console.log(event, active);
  }


}
