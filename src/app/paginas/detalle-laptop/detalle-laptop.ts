import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LaptopsService, Laptop } from '../../servicios/laptops.service';

@Component({
  selector: 'app-detalle-laptop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-laptop.html',
  styleUrl: './detalle-laptop.css',
})
export class DetalleLaptopComponent {
  laptop?: Laptop;

  constructor(
    private route: ActivatedRoute,
    private laptopsService: LaptopsService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.laptop = this.laptopsService.obtenerLaptopPorId(id);
  }
}
