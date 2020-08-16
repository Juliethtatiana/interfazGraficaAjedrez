import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorCardComponent } from './jugador-card.component';

describe('JugadorCardComponent', () => {
  let component: JugadorCardComponent;
  let fixture: ComponentFixture<JugadorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
