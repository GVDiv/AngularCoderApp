import { createAction, props } from '@ngrx/store';
import { Inscripcion } from 'src/app/models/inscripcion';

export const cargarInscripciones = createAction(
  '[Inscripciones] Cargar Inscripcioness'
);

export const inscripcionesCargadas = createAction(
  '[Inscripciones] Inscripciones cargadas',
  props<{ inscripciones: Inscripcion[] }>()
)

export const agregarInscripcion = createAction(
  '[Inscripciones] Agregar inscripcion',
  props<{ inscripcion: Inscripcion }>()
)

export const editarInscripcion = createAction(
  '[Inscripciones] Editar inscripcion',
  props<{ inscripcion: Inscripcion }>()
)

export const eliminarInscripcion = createAction(
  '[Inscripciones] Eliminar inscripcion',
  props<{ inscripcion: Inscripcion }>()
)




