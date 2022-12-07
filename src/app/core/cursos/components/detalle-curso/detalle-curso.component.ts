import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})


export class DetalleCursoComponent implements OnInit, OnDestroy {
  curso$!: Observable<Curso>;
  suscripcionDetalle!: Subscription;

  detalleCurso: Curso = {
    id: 0,
    nombre: '',
    comision: '',
    profesor: '',
    fechaInicio: new Date,
    fechaFin: new Date,
    inscripcionAbierta: false,
    imagen: ''
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private cursoService: CursoService,
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((parametros) => {
      let id = parseInt(parametros.get('id') || '0');

      this.curso$ = this.cursoService.obtenerCurso(id);

      this.suscripcionDetalle = this.cursoService.obtenerCurso(id).subscribe({
        next: (curso: Curso) => {
          this.detalleCurso = curso;
        }
      })
    })
  }

  ngOnDestroy(): void {
    this.suscripcionDetalle.unsubscribe();
  }



}
