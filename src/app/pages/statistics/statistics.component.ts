import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  arr: any = [];

  onChange(e: any) {
   const arrValue= this.arr.push(e.target.value);
   console.log('arr',this.arr);
   console.log();
  }
}
