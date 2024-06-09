import { Component } from '@angular/core';
import { paletaColorService } from '../servicios/paleta-color.service';

@Component({
  selector: 'app-colores',
  standalone: true,
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent {
  constructor(private paletaColorService: paletaColorService) { }

  cambiarColores(paletaNombre: string) {
    this.paletaColorService.cambiarColores(paletaNombre);
  }
}
