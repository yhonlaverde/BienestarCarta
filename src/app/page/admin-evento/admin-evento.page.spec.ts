import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminEventoPage } from './admin-evento.page';

describe('AdminEventoPage', () => {
  let component: AdminEventoPage;
  let fixture: ComponentFixture<AdminEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
