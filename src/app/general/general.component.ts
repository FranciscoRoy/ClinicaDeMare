import { Component } from '@angular/core';
import { NavegacionService } from '../servicios/navegacion.service';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})

export class GeneralComponent {
  usuarioTipo: number = 1;

  mostrarOpcionSeleccionada(event: any): void {
    const opcionSeleccionada = event.target.value;
    if (event.target.value == 'paciente'){
      this.usuarioTipo = 1;
    }else if(event.target.value == 'profesional'){
      this.usuarioTipo = 2;
    }else if(event.target.value == 'gerente'){
      this.usuarioTipo = 3;}  
    }

    constructor(private navegacionService: NavegacionService,) { }
    navegar(donde: number, como: number) {
      this.navegacionService.cambiarTipoUsuario(como);
      this.navegacionService.cambiarEstadoVentana(donde);
    }
    
  ingresar(){
    this.navegar(2,this.usuarioTipo);
  }

  registrarse(){
    this.navegar(3,this.usuarioTipo);
  }

  salir(){
    alert("Gracias por usar nuestra aplicacion");
  }

}
