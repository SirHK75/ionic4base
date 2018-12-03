import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertController } from '@ionic/angular';

import { Ionic4ComponentsPage } from './ionic4.page';

describe('Ionic4ComponentsPage', () => {
  let component: Ionic4ComponentsPage;
  let fixture: ComponentFixture<Ionic4ComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ionic4ComponentsPage ],
      providers: [ AlertController ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ionic4ComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
