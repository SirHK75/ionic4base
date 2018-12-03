import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { NavController } from '@ionic/angular';

import { TransitionsPage } from './transitions.page';


describe('TransitionsPage', () => {
  let component: TransitionsPage;
  let fixture: ComponentFixture<TransitionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionsPage ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        NavController,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
