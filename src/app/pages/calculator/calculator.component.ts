import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  toShow = '0';
  value: number = 0;
  action: string | null = null;

  updateCal(value: any) {
    if (this.toShow == '0') {
      this.toShow = value.toString();
    } else {
      this.toShow = `${this.toShow}${value}`;
    }
  }
  toanHang(e: any) {
    this.value = parseFloat(this.toShow);
    this.action = e;
    this.toShow = '';
  }
  result() {
    const a = this.value;
    const b = parseFloat(this.toShow);
    let kq = 0;
    if (this.action === '+') {
      kq = a + b;
    } else if (this.action === '*') {
      kq = a * b;
    } else if (this.action === '-') {
      kq = a - b;
    } else if (this.action === '/') {
      kq = a / b;
    }
    this.value = kq;
    this.toShow = kq.toString();
  }
  clear() {
    this.value = 0;
    this.toShow = '0';
  }
}
