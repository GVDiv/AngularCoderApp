import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor(
    private http: HttpClient
  ) {}

  login(usuario: Usuario): Observable<Usuario>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[])=>{
        return usuarios.filter((u: Usuario) => u.usuario === usuario.usuario && u.contrasena === usuario.contrasena)[0]
      })
    )
  }

  registro(usuario: Usuario){
    this.http.post(`${environment.api}/usuarios`, usuario).pipe(
      catchError(this.manejarError)
    ).subscribe()
  }




  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message)
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
