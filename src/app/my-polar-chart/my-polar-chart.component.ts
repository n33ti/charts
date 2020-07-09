import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-polar-chart',
  templateUrl: './my-polar-chart.component.html',
  styleUrls: ['./my-polar-chart.component.css']
})
export class MyPolarChartComponent implements OnInit {

  constructor() { }

  
  public polarChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public polarChartData = [120, 150, 180, 90];
  public polarChartType = 'polarArea';
  ngOnInit(): void {
  }

}
