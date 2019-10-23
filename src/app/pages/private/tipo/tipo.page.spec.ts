import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPage } from './tipo.page';

describe('TipoPage', () => {
  let component: TipoPage;
  let fixture: ComponentFixture<TipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
