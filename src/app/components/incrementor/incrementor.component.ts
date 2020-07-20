import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css']
})
export class IncrementorComponent implements OnInit{

  @Input('valor') progress = 50;
  @Input() btnClass = 'btn-primary'
  @Output() valueOutput: EventEmitter<number> = new EventEmitter();

  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`
  }


  changueValue( value: number ){
    if(this.progress >= 100 && value >= 0) {
      this.valueOutput.emit(100)
      return this.progress = 100;
    }

    if( this.progress <=0 && value < 0) {
      this.valueOutput.emit(0)
      return this.progress = 0;
    }
    
    this.progress = this.progress + value;
    this.valueOutput.emit(this.progress)
  }

  onChange( newValue: number ){

    if( newValue >= 100){
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valueOutput.emit(this.progress)
  }


}
