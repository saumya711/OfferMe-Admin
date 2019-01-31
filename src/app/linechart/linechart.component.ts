import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 93, 81, 56, 55, 40, 65, 43, 76, 102], label: 'Adds of a month' },
    { data: [76, 68, 132, 97, 86, 68, 51, 74, 54,98, 187], label: 'Orders of a month' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'october', 'november'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit() {
  }

}
