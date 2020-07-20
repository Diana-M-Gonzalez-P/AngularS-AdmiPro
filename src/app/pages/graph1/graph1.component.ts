import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component implements OnInit {

  public label1 = ['Pan', 'Refresco', 'Tacos']
  public data1 = [[100,350,100]]
  public label2 = ['Ropa', 'Zapatos', 'Juguetes']
  public data2 = [[40,100,400]]
  public label3 = ['Tecnologia', 'Politica', 'Empleo']
  public data3 = [[45,300,500]]
  public label4 = ['VideoJuegos', 'Juguetes', 'Viajes']
  public data4 = [[800,20,100]]
  constructor() { }

  ngOnInit(): void {
  }

}
