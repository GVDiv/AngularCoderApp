import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { AgregarCursoComponent } from './cursos/components/agregar-curso/agregar-curso.component';
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
    private router: Router,
    public dialog: MatDialog
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarCursoComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  

  title = 'angularApp';
}

