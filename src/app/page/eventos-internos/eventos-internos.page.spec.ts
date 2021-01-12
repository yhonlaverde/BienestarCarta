import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosInternosPage } from './eventos-internos.page';

describe('EventosInternosPage', () => {
  let component: EventosInternosPage;
  let fixture: ComponentFixture<EventosInternosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosInternosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosInternosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
