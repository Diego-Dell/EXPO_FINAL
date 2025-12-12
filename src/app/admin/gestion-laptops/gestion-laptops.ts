import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopsService, Laptop } from '../../servicios/laptops.service';

@Component({
  selector: 'app-gestion-laptops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-laptops.html',
  styleUrl: './gestion-laptops.css',
})
export class GestionLaptopsComponent {
  laptops: Laptop[] = [];

  constructor(private laptopsService: LaptopsService) {
    this.laptops = this.laptopsService.obtenerLaptops();
  }
}
