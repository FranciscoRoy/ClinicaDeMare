import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent{
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

}
