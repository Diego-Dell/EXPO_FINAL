import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaptopsService, Laptop } from '../../servicios/laptops.service';
import { PuedeSalir } from '../../guards/salir-guard';

@Component({
  selector: 'app-gestion-laptops',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-laptops.html',
  styleUrl: './gestion-laptops.css',
})
export class GestionLaptopsComponent implements PuedeSalir {

  laptops: Laptop[] = [];
  tieneCambios = false;

  constructor(private laptopsService: LaptopsService) {
    this.laptops = this.laptopsService.obtenerLaptops();
  }

  puedeSalir(): boolean {
    return !this.tieneCambios;
  }
}
