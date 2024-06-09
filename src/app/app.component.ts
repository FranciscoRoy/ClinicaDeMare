import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ExtraComponent } from './extra/extra.component';
import { VentanaprincipalComponent } from './ventanaprincipal/ventanaprincipal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,VentanaprincipalComponent,ExtraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  usuarioNombre: string = "";
  usuarioEstado: boolean = false;
  ventanaEstado: number = 0;

  cambiarEstadoVentana(nuevoEstado: number){
    this.ventanaEstado = nuevoEstado;
  }
}
