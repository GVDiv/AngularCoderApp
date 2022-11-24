import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.api}/usuarios`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })
  }




}
