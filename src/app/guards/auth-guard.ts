import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // cambia a true/false para permitir o bloquear
  private estaLogueado = true;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.estaLogueado) {
      return true;
    }

      alert('No tienes permiso para entrar al área de administración.');
      this.router.navigate(['/laptops']);
      return false;
  }
}
