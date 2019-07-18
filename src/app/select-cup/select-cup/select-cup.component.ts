import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'yt-select-cup',
  templateUrl: './select-cup.component.html',
  styleUrls: ['./select-cup.component.scss'],
  animations: [
    trigger('selectCup', [
      state('open', style({
        opacity: 0
      })),
      state('closed', style({
        opacity: 1
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class SelectCupComponent implements OnInit {

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
