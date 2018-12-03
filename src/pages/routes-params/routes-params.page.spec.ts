import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesParamsPage } from './routes-params.page';

describe('RoutesParamsPage', () => {
  let component: RoutesParamsPage;
  let fixture: ComponentFixture<RoutesParamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesParamsPage ],
      imports: [ RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesParamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
