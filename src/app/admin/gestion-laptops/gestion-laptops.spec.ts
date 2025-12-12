import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLaptops } from './gestion-laptops';

describe('GestionLaptops', () => {
  let component: GestionLaptops;
  let fixture: ComponentFixture<GestionLaptops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionLaptops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionLaptops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
