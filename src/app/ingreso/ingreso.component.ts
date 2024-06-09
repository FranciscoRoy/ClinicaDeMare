import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [],
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  @Input() usuarioTipo: number = 0;

  get usuarioTipoTexto(): string {
    switch (this.usuarioTipo) {
      case 1:
        return 'Paciente';
      case 2:
        return 'Profesional';
      case 3:
        return 'Gerente';
      default:
        return 'Desconocido';
    }
  }

  ingresar() {
    // Lógica para manejar el ingreso
    alert(`Ingresando como ${this.usuarioTipoTexto}`);
  }
}
