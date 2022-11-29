import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-union-object',
  templateUrl: './union-object.component.html',
  styleUrls: ['./union-object.component.css']
})
export class UnionObjectComponent implements OnInit {

  ngOnInit(): void {
      const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
      const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
      // const obj3 = objects.reduce((pre, cur) => {
      //   const ob = others.find((i) => i. === cur.id);
      //   pre.push({ ...cur, ...ob });
      //   return pre;
      // }, []);
   const arrObj = [...objects,...others];
  }




}
