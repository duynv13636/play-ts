import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-union-object',
  templateUrl: './union-object.component.html',
  styleUrls: ['./union-object.component.css'],
})
export class UnionObjectComponent implements OnInit {
  arr1: any = [];
  invalidEntries = 0;

  ngOnInit(): void {
    const array1 = [
      {
        x: 1,
        y: 2,
      },
      {
        x: 2,
        y: 1,
      },
    ];

    const array2 = [
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 2,
      },
    ];

    // const obj3 = array1.reduce((pre: any, cur) => {
    //   const ob = array2.find((i) => i.x !== cur.x);
    //   pre.push({ ...cur, ...ob });
    //   return pre;
    // }, []);
    // console.log(obj3);
    const arr = [...array2];
    array2.forEach((item1) => {
      array1.forEach((item2) => {
        if (item1.x !== item2.x && item1.y !== item2.y) {
          arr.push(item2);
        }
      });
    });
    console.log(arr);
  }
}
