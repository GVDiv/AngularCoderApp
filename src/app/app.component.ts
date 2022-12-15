import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { AgregarCursoComponent } from './core/cursos/components/agregar-curso/agregar-curso.component';
import { ListaCursosComponent } from './core/cursos/components/lista-cursos/lista-cursos.component';
import { CursoService } from './core/cursos/services/curso.service';
import { Curso } from './models/curso';
import { Sesion } from './models/sesion';
import { Usuario } from './models/usuario'
import { cursosCargados } from './state/actions/cursos.actions';
import { AppState } from './state/app.state';
import { selectSesionActiva } from './core/state/sesion.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sesion$!: Observable<Sesion>;
  opened = false;

  constructor(
    private cursoService: CursoService,
    private storeSesion: Store<Sesion>,
    private storeState: Store<AppState>,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[])=>{
      this.storeState.dispatch(cursosCargados({cursos: cursos}));
  })
    this.sesion$ = this.storeState.select(selectSesionActiva);
  }

  cerrarSesion(){
    location.reload();
    this.router.navigate(['autenticacion/login'])
  }

  dialogAgregarCurso(): void {
    const dialogRef = this.dialog.open(AgregarCursoComponent, {});

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  dialogListarCurso(){
    const dialogRef = this.dialog.open(ListaCursosComponent, {});

    dialogRef.afterClosed().subscribe(result => {
    });
  }


  title = 'angularApp';
}

