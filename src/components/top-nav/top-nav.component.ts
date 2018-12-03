import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent implements OnInit, OnChanges {

  @Input() compOptions: any;
  @Output() outputAction = new EventEmitter();

  calledFrom = '';

  constructor(
    private router: Router,
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    // detect @input changes
    const compOptions: SimpleChange = changes.compOptions;
        if (typeof compOptions !== 'undefined') {
      this.compOptions = compOptions.currentValue;
    }
    this.setGlobals();
  }

  ngOnInit() {
    this.setGlobals();
  }

  setGlobals() {
    this.calledFrom = (this.compOptions && typeof this.compOptions.calledFrom !== 'undefined') ? this.compOptions.calledFrom : '';

    this.callServices();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  callServices() {
    return false;
  }

}
