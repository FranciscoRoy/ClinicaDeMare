import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ExtraComponent } from './extra/extra.component';
import { VentanaprincipalComponent } from './ventanaprincipal/ventanaprincipal.component';
import { paletaColorService } from './servicios/paleta-color.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,VentanaprincipalComponent,ExtraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  usuarioNombre: string = "";
  usuarioEstado: boolean = false;

  constructor(private paletaColorService: paletaColorService) { }

  ngOnInit(): void {
    this.paletaColorService.colorPalette$.subscribe(paleta => {
      this.paletaColorService.aplicarColores(paleta);
    });
  }

}
