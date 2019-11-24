import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanhoPage } from './tamanho.page';

describe('TamanhoPage', () => {
  let component: TamanhoPage;
  let fixture: ComponentFixture<TamanhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamanhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamanhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
