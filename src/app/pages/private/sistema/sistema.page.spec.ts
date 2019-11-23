import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaPage } from './sistema.page';

describe('SistemaPage', () => {
  let component: SistemaPage;
  let fixture: ComponentFixture<SistemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
