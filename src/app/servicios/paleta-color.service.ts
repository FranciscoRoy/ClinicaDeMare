import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface colorPaletas {
  opcion: string;
  opcionseleccion: string;
  fondo: string;
  texto: string;
  textoseleccionado: string;
  bordes: string;
}

@Injectable({
  providedIn: 'root'
})

export class paletaColorService {
  private colorPaletas: { [key: string]: colorPaletas } = {
    azules: {
      opcion: '#00a1c9',
      opcionseleccion: '#e7f5ff',
      fondo: '#0072BB',
      texto: '#000000',
      textoseleccionado: '#3a3a3a',
      bordes: '#b6b6b6'
    },
    verdes: {
      opcion: '#28a745',
      opcionseleccion: '#d4edda',
      fondo: '#155724',
      texto: '#000000',
      textoseleccionado: '#3a3a3a',
      bordes: '#b6b6b6'
    },
    rojos: {
      opcion: '#dc3545',
      opcionseleccion: '#f8d7da',
      fondo: '#721c24',
      texto: '#000000',
      textoseleccionado: '#3a3a3a',
      bordes: '#b6b6b6'
    },
    grises: {
      opcion: '#6c757d',
      opcionseleccion: '#e2e3e5',
      fondo: '#343a40',
      texto: '#000000',
      textoseleccionado: '#3a3a3a',
      bordes: '#b6b6b6'
    }
  };

  private colorPaletaSubject = new BehaviorSubject<colorPaletas>(this.colorPaletas['azules']);
  colorPalette$ = this.colorPaletaSubject.asObservable();

  cambiarColores(nombreP: string) {
    const nuevaPaleta = this.colorPaletas[nombreP];
    this.colorPaletaSubject.next(nuevaPaleta);
    if (nuevaPaleta) {
      this.colorPaletaSubject.next(nuevaPaleta);
      this.aplicarColores(nuevaPaleta);
    }
  }

  aplicarColores(paleta: any) {
    document.documentElement.style.setProperty('--opcion', paleta.opcion);
    document.documentElement.style.setProperty('--opcionseleccion', paleta.opcionseleccion);
    document.documentElement.style.setProperty('--fondo', paleta.fondo);
    document.documentElement.style.setProperty('--texto', paleta.texto);
    document.documentElement.style.setProperty('--textoseleccionado', paleta.textoseleccionado);
    document.documentElement.style.setProperty('--bordes', paleta.bordes);
  }

}