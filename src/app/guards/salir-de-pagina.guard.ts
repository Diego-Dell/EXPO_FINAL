import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PuedeSalir } from './puede-salir';

@Injectable({
  providedIn: 'root'
})
export class SalirDePaginaGuard implements CanDeactivate<PuedeSalir> {

  canDeactivate(component: PuedeSalir): boolean {
    if (component.puedeSalir()) {
      return true;
    }

    return confirm('Tienes cambios sin guardar. ¿Seguro que quieres salir?');
  }
}
