import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  toShow = '0';
  value: any;
  action: string | null = null;

  ngOnInit(): void {
    // let expression = this.infixToPostfix('2*2+1-3+8');
    // let answer = this.executePostfix(expression);
    // console.log(answer);
  }
  updateCal(value: any) {
    if (this.toShow == '0') {
      this.toShow = value.toString();
    } else {
      this.toShow = `${this.toShow}${value}`;
    }
  }
  toanHang(e: any) {
    this.value = this.toShow.toString();
    this.action = e;
    this.toShow = this.value + e;
  }

  result() {
    try {
      let expression = this.infixToPostfix(this.toShow);
      let answer = this.executePostfix(expression);
      this.toShow = answer;
    } catch (error) {
      this.toShow = 'lỗi';
    }

    // const a = this.value;
    // const b = parseFloat(this.toShow);
    // let kq = 0;
    // if (this.action === '+') {
    //   kq = a + b;
    // } else if (this.action === '*') {
    //   kq = a * b;
    // } else if (this.action === '-') {
    //   kq = a - b;
    // } else if (this.action === '/') {
    //   kq = a / b;
    // }
    // this.value = kq;
    // this.toShow = kq.toString();
  }
  clear() {
    this.value = 0;
    this.toShow = '0';
  }

  // -----------------------------------------------------------------
  infixToPostfix(input: any) {
    let stack = [],
      answer = [],
      char;
    const operands: any = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
    for (let char of input.split('')) {
      let currentPrecedence = operands[char];
      if (currentPrecedence) {
        let peek = operands[stack[stack.length - 1]];
        // pop until the peek is smaller
        while (peek >= currentPrecedence) {
          answer.push(stack.pop());
          peek = operands[stack[stack.length - 1]];
        }
        stack.push(char);
      } else {
        // not operand, push to answer
        answer.push(char);
      }
    }
    while (stack.length > 0) {
      answer.push(stack.pop());
    }
    return answer.join(' ');
  }

  executePostfix(str: any) {
    let stack = [],
      operand1,
      operand2,
      tempOperand;
    let operators = ['+', '-', '*', '/'];
    for (let char of str.split(' ')) {
      // char = str.charAt(i);
      if (operators.indexOf(char) >= 0) {
        // operate
        operand2 = stack.pop();
        operand1 = stack.pop();
        tempOperand = eval(operand1 + char + operand2);
        stack.push(tempOperand);
      } else {
        stack.push(char);
      }
    }
    return stack.pop();
  }
}
