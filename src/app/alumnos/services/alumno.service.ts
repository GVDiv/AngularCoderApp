import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable()
export class AlumnoService {
  private alumnos: Alumno[] = [
        {
          id: 1,
          nombre: 'Gabriel',
          apellido: 'Villamayor',
          edad: 30,
          curso: 'Angular',
          email: 'gabriel@email.com',
      },
      {
          id: 2,
          nombre: 'Marcelo',
          apellido: 'Perez',
          edad: 28,
          curso: 'VueJS',
          email: 'marcelo@email.com',
      },
      {
          id: 3,
          nombre: 'Micaela',
          apellido: 'Perez',
          edad: 25,
          curso: 'React',
          email: 'micaela@email.com',
      },
      {
        id: 4,
        nombre: 'Guillermo',
        apellido: 'Gomez',
        edad: 35,
        curso: 'Angular',
        email: 'guillermo@email.com',
    },
  ];
  private alumnosSubect: BehaviorSubject<Alumno[]>;

  constructor() {
    this.alumnosSubect = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.alumnosSubect.asObservable();
  }

  obtenerAlumno(id: number): Observable<Alumno>{
    return this.obtenerAlumnos().pipe(
      map((alumnos: Alumno[]) => alumnos.filter((alumno: Alumno) => alumno.id === id)[0])
    )
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    this.alumnosSubect.next(this.alumnos);
  }

  editarAlumno(alumno: Alumno){
    let indice = this.alumnos.findIndex((a: Alumno) => a.id === alumno.id);

    if(indice > -1){
      this.alumnos[indice] = alumno;
    }

    this.alumnosSubect.next(this.alumnos);
  }

  eliminarAlumno(id: number){
    let indice = this.alumnos.findIndex((a: Alumno) => a.id === id);

    if(indice > -1){
      this.alumnos.splice(indice, 1);
    }

    this.alumnosSubect.next(this.alumnos);
  }
}

