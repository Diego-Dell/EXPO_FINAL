import { Routes } from '@angular/router';

import { ListaLaptopsComponent } from './paginas/lista-laptops/lista-laptops';
import { DetalleLaptopComponent } from './paginas/detalle-laptop/detalle-laptop';
import { CarritoComponent } from './paginas/carrito/carrito';

import { LayoutAdminComponent } from './admin/layout-admin/layout-admin';
import { PanelAdminComponent } from './admin/panel-admin/panel-admin';
import { GestionLaptopsComponent } from './admin/gestion-laptops/gestion-laptops';

export const routes: Routes = [
  { path: '', redirectTo: 'laptops', pathMatch: 'full' },

  { path: 'laptops', component: ListaLaptopsComponent },
  { path: 'laptop/:id', component: DetalleLaptopComponent },
  { path: 'carrito', component: CarritoComponent },

  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full' },
      { path: 'panel', component: PanelAdminComponent },
      { path: 'laptops', component: GestionLaptopsComponent }
    ]
  },

  { path: '**', redirectTo: 'laptops' }
];
