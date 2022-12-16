import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FiltroCursosPipe } from '../pipes/filtro-cursos.pipe';
import { BooleanATextoPipe } from '../pipes/boolean-a-texto.pipe';
import { BooleanoEstiloDirective } from '../directives/boolean-a-texto.directive';


@NgModule({
  declarations: [
    FiltroCursosPipe,
    BooleanATextoPipe,
    BooleanoEstiloDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FiltroCursosPipe,
    BooleanATextoPipe,
    BooleanoEstiloDirective
  ]
})
export class SharedModule { }
