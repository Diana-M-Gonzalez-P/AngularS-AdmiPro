import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title = ' Sin titulo '
  @Input('dataInfo') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('dataNumber') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  @Input('ChartType') doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public colors: Color[] = [
    { backgroundColor: ['#7460ee', '#26c6da', '#CDDC39']}
  ]

}
