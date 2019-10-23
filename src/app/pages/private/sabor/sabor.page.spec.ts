import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborPage } from './sabor.page';

describe('SaborPage', () => {
  let component: SaborPage;
  let fixture: ComponentFixture<SaborPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaborPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
