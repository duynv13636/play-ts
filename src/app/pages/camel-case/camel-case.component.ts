import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camel-case',
  templateUrl: './camel-case.component.html',
  styleUrls: ['./camel-case.component.css'],
})
export class CamelCaseComponent implements OnInit {
  string = '';
  ngOnInit(): void {}
  onChange(e: any) {
    const a = e.target.value
      .toLowerCase()
      .replace(/[-_\s.]+(.)?/g, (_: any, c: any) => (c ? c.toUpperCase() : ''));
    this.string = a.substring(0, 1).toLowerCase() + a.substring(1);
  }
}
