import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPage } from './pipes.page';
import { FileSizePipe } from '../../pipes/pipes.pipe';

describe('PipesPage', () => {
  let component: PipesPage;
  let fixture: ComponentFixture<PipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipesPage,
        FileSizePipe,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
