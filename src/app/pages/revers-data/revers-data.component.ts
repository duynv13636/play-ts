import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revers-data',
  templateUrl: './revers-data.component.html',
  styleUrls: ['./revers-data.component.css'],
})
export class ReversDataComponent implements OnInit {
  arr: any = [];
  constructor() {}
  ngOnInit(): void {}

  onChange(e: any) {
    this.arr.push(e.target.value);
    const obj = Object.assign({}, this.arr);
    const stringJson = JSON.stringify(obj);
    console.log(stringJson);
    // const obj = { a: "aaa", b: "bbb", c: "ccc", d: "ddd" };
    const a = Object.assign(
      {},
      ...Object.entries(obj).map(([a, b]: any) => ({ [b]: a }))
    );
    console.log(a);
  }
}
