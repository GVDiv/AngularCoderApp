import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit {
  sesion$!: Observable<Sesion>;
  cursos$!: Observable<Curso[]>;

  constructor(
    private sesionService: SesionService,
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  verCursos(){
    this.router.navigate(['/cursos/listar']);
  }

  crearUsuario(){
    this.router.navigate(['autenticacion/login']);
  }

}
