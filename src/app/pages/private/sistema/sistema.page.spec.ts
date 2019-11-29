import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SistemaPage } from './sistema.page';

describe('SistemaPage', () => {
  let component: SistemaPage;
  let fixture: ComponentFixture<SistemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SistemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
