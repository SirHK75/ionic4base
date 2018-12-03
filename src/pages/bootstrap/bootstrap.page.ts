import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'bootstrap',
  templateUrl: 'bootstrap.page.html',
  styleUrls: ['bootstrap.page.scss'],
})
export class BootstrapCssPage {

  constructor(
    private elementRef: ElementRef,
  ) {

  }

}
