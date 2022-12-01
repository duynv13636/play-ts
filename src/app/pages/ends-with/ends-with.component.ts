import { Component, OnInit } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-ends-with',
  templateUrl: './ends-with.component.html',
  styleUrls: ['./ends-with.component.css'],
})
export class EndsWithComponent implements OnInit {
  text1 = '';
  text2 = '';
  text3: any;
  check = '';
  constructor() {}

  ngOnInit(): void {
    // console.log(this.handleEndWith('duy', 'd', 1));
    // this.handleEndWith('duy', 'd');
  }
  handleEndWith(a: string, b: string, c?: any) {
    if (a.endsWith(b) || a.endsWith(b, c)) {
      // return true;
      this.check = 'true';
    } else {
      this.check = 'false';
      // return false;
    }
  }
  click() {
    console.log(this.handleEndWith(this.text1, this.text2, this.text3));
  }
}
