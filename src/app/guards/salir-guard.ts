import { CanDeactivateFn } from '@angular/router';

export interface PuedeSalir {
  puedeSalir: () => boolean;
}

export const SalirGuard: CanDeactivateFn<PuedeSalir> = (component, currentRoute, currentState, nextState) => {

  if (component.puedeSalir()) {
    return true;
  }

  return confirm('Tienes cambios sin guardar. ¿Deseas salir de esta página?');
};
