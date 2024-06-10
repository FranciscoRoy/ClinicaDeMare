import { Component, Input } from '@angular/core';
import { NavegacionService } from '../servicios/navegacion.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() usuarioTipo: number = 0;

  constructor(private navegacionService: NavegacionService,) { }
  navegar(donde: number, como: number) {
    this.navegacionService.cambiarTipoUsuario(como);
    this.navegacionService.cambiarEstadoVentana(donde);
  }
  

}
