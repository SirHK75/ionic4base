import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: 'directives.page.html',
  styleUrls: ['directives.page.scss'],
})
export class DirectivesPage implements OnInit {

  constructor(
    private elementRef: ElementRef,
  ) {

  }

  ngOnInit() {

  }

  getRandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
