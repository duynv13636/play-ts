import { Component, OnInit } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-ends-with',
  templateUrl: './ends-with.component.html',
  styleUrls: ['./ends-with.component.css'],
})
export class EndsWithComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    console.log(this.handleEndWith('duy', 'd', 1));
    this.handleEndWith('duy', 'd');
  }
  handleEndWith(a: string, b: string, c?: number) {
    if (a.endsWith(b) || a.endsWith(b, c)) {
      return true;
    } else {
      return false;
    }
  }
}
