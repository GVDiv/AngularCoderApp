import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { Sesion } from './models/sesion';
import { Usuario } from './models/usuario'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sesion$!: Observable<Sesion>;
  opened = false;
  
  constructor(
    private sesionService: SesionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  cerrarSesion(){
    let sesion: Sesion = {
      sesionActiva: false,
      // usuarioActivo?: Usuario,
    }
    this.sesionService.cerrarSesion(sesion);
    this.router.navigate(['autenticacion/login'])
  }
  

  title = 'angularApp';
}

