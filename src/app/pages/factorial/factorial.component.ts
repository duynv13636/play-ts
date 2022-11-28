import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css'],
})
export class FactorialComponent implements OnInit {
  result = '';
  constructor() {}
  ngOnInit(): void {}
  factorial() {
    var num = Number(prompt('Nhập vào 1 số để tính giai thừa'));
    var string = '';
    if (num == 0) {
      return;
    } else {
      var factorialResult = 1;
      for (var i = 1; i <= num; i++) {
        factorialResult *= i;
        if (i < num) {
          string = string + i + '*';
        }
        if (i == num) {
          string = string + i + '=';
        }
      }
      this.result = string = string + factorialResult;
    }
  }
}
