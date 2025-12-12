import { Routes } from '@angular/router';

import { ListaLaptopsComponent } from './paginas/lista-laptops/lista-laptops';
import { DetalleLaptopComponent } from './paginas/detalle-laptop/detalle-laptop';
import { CarritoComponent } from './paginas/carrito/carrito';

import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'laptops', pathMatch: 'full' },

  { path: 'laptops', component: ListaLaptopsComponent },
  { path: 'laptop/:id', component: DetalleLaptopComponent },
  { path: 'carrito', component: CarritoComponent },

  // ✅ LAZY LOADING del Admin
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.routes').then(m => m.adminRoutes)
  },

  { path: '**', redirectTo: 'laptops' }
];
