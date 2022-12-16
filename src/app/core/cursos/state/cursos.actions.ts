import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const loadCursos = createAction(
  '[Cursos] Load Cursoss'
);

export const loadCursosSuccess = createAction(
  '[Cursos] Load Cursoss Success',
  props<{ cursos: Curso[] }>()
);

export const agregarCurso = createAction(
  '[Cursos] Agregar Curso',
  props<{ curso: Curso }>()
)

export const editarCurso = createAction(
  '[Cursos] Editar Curso',
  props<{ curso: Curso }>()
)

export const eliminarCurso = createAction(
  '[Cursos] Eliminar Curso',
  props<{ curso: Curso }>()
)

export const loadCursosFailure = createAction(
  '[Cursos] Load Cursoss Failure',
  props<{ error: any }>()
);
