import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { IncrementorComponent } from './incrementor/incrementor.component';
import { DonaComponent } from './dona/dona.component';




@NgModule({
  declarations: [IncrementorComponent, DonaComponent],
  exports: [IncrementorComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
