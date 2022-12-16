import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state';
import { eliminarCurso, loadCursos } from '../../state/cursos.actions';
import { selectStateCursos } from '../../state/cursos.selectors';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;
  cargando = true;
  usuarioActivo?: Usuario;
  dataCursos!: Curso[];

  constructor(
    private storeSesion: Store<Sesion>,
    private storeCursos: Store<CursoState>,
    private router: Router,
  ) {
    this.storeCursos.dispatch(loadCursos())
  }

  ngAfterViewInit() {
    this.sesion$ = this.storeSesion.select(selectSesionActiva);
  }

  ngOnInit(): void {
    this.storeCursos.select(selectStateCursos).subscribe
    ((cursos: Curso[]) => {
      this.dataCursos = cursos;
      this.cargando = false;
    })
    this.cursos$ = this.storeCursos.select(selectStateCursos);
    this.storeSesion.select(selectSesionActiva).subscribe((sesion: Sesion) => {
      this.usuarioActivo = sesion.usuarioActivo;
    })
  }


  agregarCurso(){
    this.router.navigate(['/cursos/agregar']);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }

  eliminarCurso(curso: Curso){
    this.storeCursos.dispatch(eliminarCurso({curso}))
  }
}
