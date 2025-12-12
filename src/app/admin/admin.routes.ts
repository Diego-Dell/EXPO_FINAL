import { Routes } from '@angular/router';

import { LayoutAdminComponent } from './layout-admin/layout-admin';
import { PanelAdminComponent } from './panel-admin/panel-admin';
import { GestionLaptopsComponent } from './gestion-laptops/gestion-laptops';

import { SalirGuard } from '../guards/salir-guard';

export const adminRoutes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full' },
      { path: 'panel', component: PanelAdminComponent },
      {
        path: 'laptops',
        component: GestionLaptopsComponent,
        canDeactivate: [SalirGuard]
      }
    ]
  }
];
