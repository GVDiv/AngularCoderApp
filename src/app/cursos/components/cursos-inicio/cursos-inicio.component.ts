import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursoService } from '../../services/curso.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  sesion$!: Observable<Sesion>;
  cursos$!: Observable<Curso[]>;

  suscripcion: any;
  datosCursos!: Curso[];
  
  dataSource = new MatTableDataSource<Curso>([]);
  displayedColumns: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'detalle', 'editar', 'eliminar'];
  

  constructor(
    private sesionService: SesionService,
    private cursoService: CursoService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  ngOnInit(): void {

    this.suscripcion = this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.datosCursos = cursos;
        this.dataSource.data = this.datosCursos
        // console.log(cursos),
        // console.log(this.datosCursos)
      }
    })

    this.sesion$ = this.sesionService.obtenerSesion();
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
    this.toastr.error('El curso fue eliminado con exito!', 'Curso eliminado');
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
