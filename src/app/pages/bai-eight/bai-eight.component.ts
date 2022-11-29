import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-eight',
  templateUrl: './bai-eight.component.html',
  styleUrls: ['./bai-eight.component.css'],
})
export class BaiEightComponent implements OnInit {
  arr :any= [];
  string='';
  ngOnInit(): void {}

  onClick() {
    for (let index = 10; index < 201; index++) {
      if (index % 7 == 0 && index % 5 !== 0) {
         this.arr.push(index);   
      }
    }
   this.string = this.arr.join(',')

  }
}
