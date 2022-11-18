import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/cursos/services/curso.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetalleCursoComponent } from '../detalle-curso/detalle-curso.component';
import { Sesion } from 'src/app/models/sesion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
    this.cursos$ = this.cursoService.obtenerCursos();
    this.toastr.error('El curso fue eliminado con exito!', 'Curso eliminado');
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
  
  openDialog() {
      this.dialog.open(DetalleCursoComponent);
  }


}
