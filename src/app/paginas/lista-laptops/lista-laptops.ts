import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LaptopsService, Laptop } from '../../servicios/laptops.service';

@Component({
  selector: 'app-lista-laptops',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-laptops.html',
  styleUrl: './lista-laptops.css',
})
export class ListaLaptopsComponent {
  laptops: Laptop[] = [];

  constructor(private laptopsService: LaptopsService) {
    this.laptops = this.laptopsService.obtenerLaptops();
  }
}
