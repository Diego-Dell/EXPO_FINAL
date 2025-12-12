import { Injectable } from '@angular/core';

export interface Laptop {
  id: number;
  marca: string;
  modelo: string;
  procesador: string;
  ram: string;
  almacenamiento: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  private laptops: Laptop[] = [
    {
      id: 1,
      marca: 'Lenovo',
      modelo: 'LOQ 15',
      procesador: 'Core i7 13650HX',
      ram: '16 GB',
      almacenamiento: '512 GB SSD',
      precio: 980,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzclZhDvnWyjaul-j7pD46CuEI8HkavgQXjw&s'
    },
    {
      id: 2,
      marca: 'HP',
      modelo: 'Victus',
      procesador: 'Ryzen 7 7840HS',
      ram: '16 GB',
      almacenamiento: '1 TB SSD',
      precio: 1100,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcgnB8Qyg1Sv6C22us86VRVl1QagLANAz_Q&s'
    },
    {
      id: 3,
      marca: 'MSI',
      modelo: 'Stealth 14',
      procesador: 'Core i7 13700H',
      ram: '32 GB',
      almacenamiento: '1 TB SSD',
      precio: 1500,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5U2NwQ_U3RmvgwRIhMl7MSUZxNSMqu4GkYw&s'
    }
  ];

  obtenerLaptops(): Laptop[] {
    return this.laptops;
  }

  obtenerLaptopPorId(id: number): Laptop | undefined {
    return this.laptops.find(l => l.id === id);
  }
}
