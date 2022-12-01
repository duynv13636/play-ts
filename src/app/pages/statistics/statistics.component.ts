import { Component } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  string = '';
  arr: any = [];
  onChange(e: any) {
    let arr1 = e.target.value;
    const arr2 = arr1.split(',');
    const result = arr2.reduce(
      (acc: any, curr: any) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
      {}
    );
    const ar = Object.keys(result).map((i) => ({ key: i, value: result[i] }));
    const valueSort = ar.sort((a, b) => b.value - a.value);
    for (let index = 0; index < valueSort.length; index++) {
      const element = valueSort[index];
      this.arr = [...this.arr, element.key + ':' + element.value];
    }
    JSON.stringify(this.arr);
  }
}
