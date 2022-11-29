import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  arr: any = [];

  constructor() {}
  ngOnInit(): void {
    this.on();
  }
  on() {
    for (let index = 0; index < 24; index++) {
      for (let j = 0; j < 6; j++) {
        this.arr.push(index + ':' + j + '0');
      }
    }

}}
