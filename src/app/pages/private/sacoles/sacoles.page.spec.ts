import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacolesPage } from './sacoles.page';

describe('SacolesPage', () => {
  let component: SacolesPage;
  let fixture: ComponentFixture<SacolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacolesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
