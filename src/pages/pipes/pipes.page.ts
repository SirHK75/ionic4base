import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: 'pipes.page.html',
  styleUrls: ['pipes.page.scss'],
})
export class PipesPage implements OnInit {

  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };

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
