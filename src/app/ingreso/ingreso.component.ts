import { Component, Input } from '@angular/core';
import { Usuarios } from '../entidades/usuarios';
import { NavegacionService } from '../servicios/navegacion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [FormsModule],
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

  public listaUsuarios:Usuarios[]=[];
  public usuario:Usuarios = {nombre:'',apellido:'',dni:0,email: '', password: ''};

  public ingresar(){
    this.listaUsuarios = JSON.parse(localStorage.getItem('usuario')||'[]');
    if(this.listaUsuarios.filter(t=> t.nombre.toLowerCase() == this.usuario.nombre.toLowerCase() && t.password == this.usuario.password).length == 1)
      {this.navegar(7,this.usuarioTipo);}
    }

  constructor(private navegacionService: NavegacionService,) { }
  navegar(donde: number, como: number) {
    this.navegacionService.cambiarTipoUsuario(como);
    this.navegacionService.cambiarEstadoVentana(donde);
  }
}
