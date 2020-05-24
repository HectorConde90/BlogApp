import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  validacion: string;

  constructor(private rutas: Router) {
    this.validacion = localStorage.getItem('loged');
  }
  canActivate() {



    if (this.validacion === 'true') {
      return true;
    }
    this.rutas.navigate(['/login']);
    return false;


  }

}
