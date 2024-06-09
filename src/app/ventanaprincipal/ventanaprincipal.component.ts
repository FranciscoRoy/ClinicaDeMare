import { Component, Input } from '@angular/core';
import { GeneralComponent } from "../general/general.component";
import { InicioComponent } from "../inicio/inicio.component";
import { IngresoComponent } from '../ingreso/ingreso.component';
import { RegistroComponent } from '../registro/registro.component';
import { ErrorComponent } from '../error/error.component';


@Component({
    selector: 'app-ventanaprincipal',
    standalone: true,
    templateUrl: './ventanaprincipal.component.html',
    styleUrl: './ventanaprincipal.component.css',
    imports: [GeneralComponent, InicioComponent, IngresoComponent, RegistroComponent, ErrorComponent]
})

export class VentanaprincipalComponent{
  @Input() usuarioEstado: boolean = false;
  @Input() ventanaEstado: number = 0;
  
  titulo: string = "TITULO DE PRUEBA";
  
  cambiarTitulo(nuevoTitulo: string){
    this.titulo = nuevoTitulo;
  }


}
