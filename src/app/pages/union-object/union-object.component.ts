import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-union-object',
  templateUrl: './union-object.component.html',
  styleUrls: ['./union-object.component.css'],
})
export class UnionObjectComponent implements OnInit {
  ngOnInit(): void {
    // const objects = [
    //   { x: 1, y: 2 },
    //   { x: 2, y: 1 },
    // ];
    // const others = [
    //   { x: 1, y: 1 },
    //   { x: 1, y: 2 },
    // ];

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

    const array = [...array1];

    array1.forEach((item1) => {
      array2.forEach((item2) => {
        if (item1.x !== item2.x && item1.y !== item2.y) {
          array.push(item2);
        }
      });
    });
    console.log(array);
  }
}
