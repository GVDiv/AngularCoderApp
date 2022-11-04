import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>

  constructor(
    private alumnoService: AlumnoService,
  ) { }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

}
