import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revers-data',
  templateUrl: './revers-data.component.html',
  styleUrls: ['./revers-data.component.css'],
})
export class ReversDataComponent implements OnInit {
  arr: any = [];
  string = '';
  constructor() {}
  ngOnInit(): void {}

  onChange(e: any) {
    // this.arr.push(e.target.value);
    // console.log(e.target.value);
    // const arr = JSON.stringify(e.target.value);
    this.string = e.target.value;
    const arrObj = JSON.parse(e.target.value);

    console.log(arrObj);
    const object2 = Object.fromEntries(
      Object.entries(arrObj).map(([key, val]) => [val, key])
    );

    console.log(object2);

    this.string = object2;

    // const obj = Object.assign({}, this.arr);
    // const stringJson = JSON.stringify(obj);
    // console.log(stringJson);
    // // const obj = { a: "aaa", b: "bbb", c: "ccc", d: "ddd" };
    // const a = Object.assign(
    //   {},
    //   ...Object.entries(obj).map(([a, b]: any) => ({ [b]: a }))
    // );
    // console.log(a);

    // {"a": 3},{ "b": 2}, {"c": 1 }
  }
}
