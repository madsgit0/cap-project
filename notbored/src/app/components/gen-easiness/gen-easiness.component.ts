import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-easiness',
  templateUrl: './gen-easiness.component.html',
  styleUrls: ['./gen-easiness.component.scss']
})
export class GenEasinessComponent implements OnInit {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
