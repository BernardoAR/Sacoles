import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SacolesPage } from './sacoles.page';

describe('SacolesPage', () => {
  let component: SacolesPage;
  let fixture: ComponentFixture<SacolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SacolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
