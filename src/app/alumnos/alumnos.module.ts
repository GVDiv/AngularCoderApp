import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { AlumnoListaComponent } from './components/alumno-lista/alumno-lista.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { AlumnoService } from './services/alumno.service';



@NgModule({
  declarations: [
    AlumnoInicioComponent,
    AlumnoListaComponent,
    AgregarAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    AlumnosRoutingModule,
    SharedModule
  ],
  providers: [
    AlumnoService
  ]
})
export class AlumnosModule { }
