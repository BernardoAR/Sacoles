import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendaPage } from './venda.page';

describe('VendaPage', () => {
  let component: VendaPage;
  let fixture: ComponentFixture<VendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
