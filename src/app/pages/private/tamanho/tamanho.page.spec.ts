import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TamanhoPage } from './tamanho.page';

describe('TamanhoPage', () => {
  let component: TamanhoPage;
  let fixture: ComponentFixture<TamanhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamanhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TamanhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
