import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursoService } from '../../services/curso.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state';
import { loadCursosFailure, loadCursosSuccess } from '../../state/cursos.actions';
import { selectStateCursos } from '../../state/cursos.selectors';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  cargando = true;

  sesion$!: Observable<Sesion>;
  cursos$!: Observable<Curso[]>;

  suscripcionCursos!: Subscription;

  dataSource = new MatTableDataSource<Curso>([]);
  displayedColumns: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'detalle', 'editar', 'eliminar'];


  constructor(
    private sesionService: SesionService,
    private cursoService: CursoService,
    private router: Router,
    private storeSesion: Store<Sesion>,
    private storeCurso: Store<CursoState>
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sesion$ = this.storeSesion.select(selectSesionActiva);
  }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Curso[])=>{
        this.storeCurso.dispatch(loadCursosSuccess({cursos}));
        this.dataSource.data = cursos;
        this.cargando = false;
      },
      error: (error: any) => {
        this.storeCurso.dispatch(loadCursosFailure(error))
      }
    })
    this.cursos$ = this.storeCurso.select(selectStateCursos);
    this.sesion$ = this.storeSesion.select(selectSesionActiva);
  }

  ngOnDestroy(): void {
      this.suscripcionCursos.unsubscribe();
  }

  listaCursos(){
    this.router.navigate(['/cursos/listar']);
  }

  agregarCurso(){
    this.router.navigate(['/cursos/agregar']);
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
    this.cursos$ = this.cursoService.obtenerCursos();
    this.router.navigate(['']);
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event?.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.nombre.toLowerCase().includes(filtro.toLocaleLowerCase());
    }
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision(event: Event){
    const valorObtenido = (event?.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.comision.toLowerCase().includes(filtro.toLocaleLowerCase());
    }
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }



}
