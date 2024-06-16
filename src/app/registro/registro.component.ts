import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuarios } from '../entidades/usuarios';
import { NavegacionService } from '../servicios/navegacion.service';
import { HttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore, Firestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ConexionFirestoreService } from '../servicios/conexion-firestore.service';

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

  /*estas variables provenien del servicio usuarios, supongo*/
  datosUsuario: Usuarios = {
    nombre: '',
    apellido: '',
    dni: 0,
    email: '',
    password: ''
  };

  constructor(private navegacionService: NavegacionService, private conexionFirestore: ConexionFirestoreService) { }
  navegar(donde: number, como: number) {
    this.navegacionService.cambiarTipoUsuario(como);
    this.navegacionService.cambiarEstadoVentana(donde);
  }

}
