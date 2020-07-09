import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
@Component({
  selector: 'app-my-bubble-chart',
  templateUrl: './my-bubble-chart.component.html',
  styleUrls: ['./my-bubble-chart.component.css']
})
export class MyBubbleChartComponent implements OnInit {

  constructor() { }
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
       
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
  ];
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{ ticks: { min: 0, max: 30, } }],
      yAxes: [{ ticks: { min: 0, max: 30, } }]
    }
  };
  ngOnInit(): void {
  }

}
