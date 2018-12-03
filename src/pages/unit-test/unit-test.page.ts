import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'unit-test-page',
  templateUrl: 'unit-test.page.html',
  styleUrls: ['unit-test.page.scss'],
})
export class UnitTestPage implements OnInit {

  unitTests = [
    {
      component: 'AppComponent',
      tests: [
        'should create the app',
        'should initialize the app',
        'should have menu labels',
        'should have urls',
      ],
    },
    {
      component: 'TopNavComponent',
      tests: [
        'should create',
      ],
    },
    {
      component: 'BootstrapCssPage',
      tests: [
        'should create',
      ],
    },
    {
      component: 'DirectivesPage',
      tests: [
        'should create',
      ],
    },
    {
      component: 'HomePage',
      tests: [
        'should create',
      ],
    },
    {
      component: 'Ionic4ComponentsPage',
      tests: [
        'should create',
      ],
    },
    {
      component: 'ListPage',
      tests: [
        'should create',
        'should have a list of 10 elements',
      ],
    },
    {
      component: 'PipesPage',
      tests: [
        'should create',
      ],
    },
    {
      component: 'RoutesParamsPage',
      tests: [
        'should create',
      ],
    },
    {
      component: 'TransitionsPage',
      tests: [
        'should create',
      ],
    },
    {
      component: 'UnitTestPage',
      tests: [
        'should create',
      ],
    },
  ];

  constructor(
  ) {}

  ngOnInit() {
  }

}
