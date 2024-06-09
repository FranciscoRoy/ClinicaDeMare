import { Component } from '@angular/core';

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

  ingresar(){
    if (this.usuarioTipo ==1){
      alert("Menu de login de pacientes");
    }
    else if(this.usuarioTipo ==2){
      alert("Menu de login de profesionales");
    }
    else if(this.usuarioTipo ==3){
      alert("Menu de login de gerentes");
    }
  }

  registrarse(){
    if (this.usuarioTipo ==1){
      alert("Menu de registro de pacientes");
    }
    else if(this.usuarioTipo ==2){
      alert("Menu de registro de profesionales");
    }
    else if(this.usuarioTipo ==3){
      alert("Menu de registro de gerentes");
    }
  }

  salir(){
    alert("Gracias por usar nuestra aplicacion");
  }

}
