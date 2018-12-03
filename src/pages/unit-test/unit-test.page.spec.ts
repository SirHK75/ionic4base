import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestPage } from './unit-test.page';

describe('UnitTestPage', () => {
  let component: UnitTestPage;
  let fixture: ComponentFixture<UnitTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
