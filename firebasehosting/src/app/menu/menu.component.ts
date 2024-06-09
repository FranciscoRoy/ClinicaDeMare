import { Component } from '@angular/core';
import { NavegacionService } from '../servicios/navegacion.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private navegacionService: NavegacionService) { }
    navegar(donde: number) {
      this.navegacionService.cambiarEstadoVentana(donde);
  }
  
}
