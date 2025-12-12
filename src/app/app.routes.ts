import { Routes } from '@angular/router';

// PÁGINAS PRINCIPALES
import { ListaLaptopsComponent } from './paginas/lista-laptops/lista-laptops';
import { DetalleLaptopComponent } from './paginas/detalle-laptop/detalle-laptop';
import { CarritoComponent } from './paginas/carrito/carrito';

// ADMIN
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin';
import { PanelAdminComponent } from './admin/panel-admin/panel-admin';
import { GestionLaptopsComponent } from './admin/gestion-laptops/gestion-laptops';

// GUARDS
import { AuthGuard } from './guards/auth-guard';
import { SalirGuard } from './guards/salir-guard';

export const routes: Routes = [

  // Ruta raíz → redirige a laptops
  { path: '', redirectTo: 'laptops', pathMatch: 'full' },

  // Rutas principales del e-commerce
  { path: 'laptops', component: ListaLaptopsComponent },
  { path: 'laptop/:id', component: DetalleLaptopComponent },
  { path: 'carrito', component: CarritoComponent },

  // ADMIN (protegido por CanActivate)
  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full' },

      // Dashboard
      { path: 'panel', component: PanelAdminComponent },


      {
        path: 'laptops',
        component: GestionLaptopsComponent,
        canDeactivate: [SalirGuard]
      }
    ]
  },

  { path: '**', redirectTo: 'laptops' }
];
