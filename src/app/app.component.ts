import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { AgregarCursoComponent } from './cursos/components/agregar-curso/agregar-curso.component';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { CursoService } from './cursos/services/curso.service';
import { Curso } from './models/curso';
import { Sesion } from './models/sesion';
import { Usuario } from './models/usuario'
import { cursosCargados } from './state/actions/cursos.actions';
import { AppState } from './state/app.state';

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
    private cursoService: CursoService,
    private store: Store<AppState>,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[])=>{
      console.log('actualizando store');
      this.store.dispatch(cursosCargados({cursos: cursos}));
      console.log('se cargaron los cursos al store');
  })
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

  dialogAgregarCurso(): void {
    const dialogRef = this.dialog.open(AgregarCursoComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  dialogListarCurso(){
    const dialogRef = this.dialog.open(ListaCursosComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  title = 'angularApp';
}

