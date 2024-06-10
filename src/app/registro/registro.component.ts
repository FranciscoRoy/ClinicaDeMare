import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../entidades/usuarios';
import { NavegacionService } from '../servicios/navegacion.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
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

  listaUsuarios:Usuarios[]=[];
  public usuario:Usuarios = {nombre:'',apellido:'',dni:0,email: '', password: ''};

  registrarUsuario() {
    this.listaUsuarios.push(this.usuario);
    localStorage.setItem('datosUsuarios',JSON.stringify(this.listaUsuarios));
    alert('Registrado Exitosamente');
    this.navegar(2,this.usuarioTipo);
  }

  constructor(private navegacionService: NavegacionService,) { }
  navegar(donde: number, como: number) {
    this.navegacionService.cambiarTipoUsuario(como);
    this.navegacionService.cambiarEstadoVentana(donde);
  }

}
