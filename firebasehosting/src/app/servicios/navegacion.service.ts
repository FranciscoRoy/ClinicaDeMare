/*Navegacion esta definiendo que ventana mostrar segun opcion selecionada y tipo de usuario logueado*/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavegacionService {
  private estadoVentanaSubject = new BehaviorSubject<number>(0);
  estadoVentana$ = this.estadoVentanaSubject.asObservable();

  cambiarEstadoVentana(nuevoEstado: number) {
    this.estadoVentanaSubject.next(nuevoEstado);
  }

  private tipoUsuarioSubject = new BehaviorSubject<number>(0);
  tipoUsuario$ = this.tipoUsuarioSubject.asObservable();

  cambiarTipoUsuario(nuevoTipoUsuario: number) {
    this.tipoUsuarioSubject.next(nuevoTipoUsuario);
  }

}
