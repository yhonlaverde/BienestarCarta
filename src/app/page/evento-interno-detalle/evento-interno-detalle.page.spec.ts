import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventoInternoDetallePage } from './evento-interno-detalle.page';

describe('EventoInternoDetallePage', () => {
  let component: EventoInternoDetallePage;
  let fixture: ComponentFixture<EventoInternoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoInternoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoInternoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
