import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLaptops } from './lista-laptops';

describe('ListaLaptops', () => {
  let component: ListaLaptops;
  let fixture: ComponentFixture<ListaLaptops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaLaptops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLaptops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
