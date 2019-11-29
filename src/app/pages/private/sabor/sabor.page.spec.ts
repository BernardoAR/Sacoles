import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaborPage } from './sabor.page';

describe('SaborPage', () => {
  let component: SaborPage;
  let fixture: ComponentFixture<SaborPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaborPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
