import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css'],
})
export class QuadraticEquationComponent implements OnInit {
  string = '';
  x1 = 0;
  x2 = 0;
  x3 = 0;

  constructor() {}
  ngOnInit(): void {}
  quadraticEquation() {
    const number_A = Number(prompt('Nhập số a'));
    const number_B = Number(prompt('Nhập số b'));
    const number_C = Number(prompt('Nhập số c'));

    if (number_A == 0) {
      if (number_B == 0) {
        this.string = 'Phương trình có vô số nghiệm!';
      } else {
        this.x1 = -number_C / number_B;
        this.string = 'Phương trình có 1 nghiệm! x = ' + this.x1;
      }
    } else {
      const delta = Math.pow(number_B, 2) - 4 * (number_A * number_C);
      if (delta > 0) {
        this.x1 = (-number_B + Math.sqrt(delta)) / (2 * number_A);
        this.x2 = (-number_B - Math.sqrt(delta)) / (2 * number_A);
        this.string =
          'Phương trình có 2 nghiệm phân biệt!' +
          'x1 = ' +
          this.x1 +
          'và' +
          'x2 = ' +
          this.x2;
      } else if (delta == 0) {
        this.x3 = (-number_B / 2) * number_A;
        this.string = 'Phương trình có nghiệm kép' + 'x1 = x2 = ' + this.x3;
      } else {
        this.string = 'Phương trình vô nghiệm!';
      }
    }
  }
}
