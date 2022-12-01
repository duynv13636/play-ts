import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  toShow = '0';
  currvalue = '';
  updateCal(value: string) {
    this.currvalue = this.currvalue + value;
    this.toShow = this.currvalue;
  }
  result() {
    // console.log('curr',this.currvalue);
    try {
      this.toShow = eval(this.currvalue);
      this.currvalue = this.toShow;
    } catch (error) {
      this.toShow = 'error';
    }
  }
  clear() {
    this.currvalue = '';
    this.toShow = '0';
  }
}
