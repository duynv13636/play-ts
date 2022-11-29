import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  arr: any = [];

  onChange(e: any) {
    //  const arrValue= this.arr.push(e.target.value);
    //  console.log('arr',this.arr);
    //  console.log();
    const arrValue = this.arr.push(e.target.value);
    console.log('arr', this.arr);

    this.arr.forEach((value: any, count: any) =>
      console.log(`value: ${value}, count: ${value[count]}`)
    );

    const result = this.arr.reduce(
      (acc: any, curr: any) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
      {}
    );
    console.log(result);

    for (let index = 0; index < result.length; index++) {
      console.log(index);
    }
  }
}
