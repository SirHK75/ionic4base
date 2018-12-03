import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCssPage } from './bootstrap.page';

describe('BootstrapCssPage', () => {
  let component: BootstrapCssPage;
  let fixture: ComponentFixture<BootstrapCssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
