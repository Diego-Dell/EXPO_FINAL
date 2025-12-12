import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLaptop } from './detalle-laptop';

describe('DetalleLaptop', () => {
  let component: DetalleLaptop;
  let fixture: ComponentFixture<DetalleLaptop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleLaptop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleLaptop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
