import { Component, Input } from '@angular/core';
import { GeneralComponent } from "../general/general.component";
import { InicioComponent } from "../inicio/inicio.component";

@Component({
    selector: 'app-ventanaprincipal',
    standalone: true,
    templateUrl: './ventanaprincipal.component.html',
    styleUrl: './ventanaprincipal.component.css',
    imports: [GeneralComponent, InicioComponent]
})
export class VentanaprincipalComponent {
  @Input()
  usuarioEstado: boolean = false;
  titulo: string = "TITULO DE PRUEBA";
  
  cambiarTitulo(nuevoTitulo: string){
    this.titulo = nuevoTitulo;
  }


}
