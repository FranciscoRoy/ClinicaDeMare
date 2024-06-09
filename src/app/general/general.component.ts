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
  usuarioTipo: number = 0;

  mostrarOpcionSeleccionada(event: any): void {
    const opcionSeleccionada = event.target.value;
    if (event.target.value == 'paciente'){
      this.usuarioTipo = 1;
    }else if(event.target.value == 'profesional'){
      this.usuarioTipo = 2;
    }else if(event.target.value == 'gerente'){
      this.usuarioTipo = 3;}  
    }

    constructor(private navegacionService: NavegacionService) { }
    navegar(donde: number) {
      this.navegacionService.cambiarEstadoVentana(donde);
    }

  ingresar(){
    switch(this.usuarioTipo){
      case 1:
        this.navegar(2);
        return;
      case 2:
        this.navegar(2);
        return;
      case 3:
        this.navegar(2);
        return;
      default:
        this.navegar(4); /*mensaje error*/
        return;
   }
  }

  registrarse(){
    if (this.usuarioTipo ==1){
      this.navegar(3);
    }
    else if(this.usuarioTipo ==2){
      this.navegar(3);
    }
    else if(this.usuarioTipo ==3){
      this.navegar(3);
    }
  }

  salir(){
    alert("Gracias por usar nuestra aplicacion");
  }

}
