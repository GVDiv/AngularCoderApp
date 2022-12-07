import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor(
    private http: HttpClient
  ) {
    // const sesion: Sesion = {
    //   sesionActiva: false
    // };
    // this.sesionSubject = new BehaviorSubject(sesion);
  }

  login(usuario: Usuario): Observable<Usuario>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`).pipe(
      map((usuarios: Usuario[])=>{
        return usuarios.filter((u: Usuario) => u.usuario === usuario.usuario && u.contrasena === usuario.contrasena)[0]
      })
    )
  }

  // obtenerSesion(): Observable<Sesion>{
  //   return this.sesionSubject.asObservable();
  // }

  // cerrarSesion(sesion: Sesion){
  //    return this.sesionSubject.next(sesion);
  // }
}
