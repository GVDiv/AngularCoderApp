import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, filter, map, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../../../models/curso';

@Injectable()
export class CursoService {


  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursos`)
  }

  obtenerCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`${environment.api}/cursos/${id}`)
  }

  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${environment.api}/cursos/`, curso);
  }

  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${environment.api}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${environment.api}/cursos/${curso.id}`);
  }
}
