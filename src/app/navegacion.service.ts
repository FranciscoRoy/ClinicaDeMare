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
}
