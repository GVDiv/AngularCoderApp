import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../services/curso.service';

import * as CursosActions from './cursos.actions';


@Injectable()
export class CursosEffects {
    constructor(
        private actions$: Actions,
        private cursos: CursoService
    ){}


    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.loadCursos),
            concatMap(() => this.cursos.obtenerCursos().pipe(
                map((c: Curso[]) => CursosActions.loadCursosSuccess({cursos: c}))
            ))
        )
    });

    agregarCursos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.agregarCurso),
            concatMap(({curso}) => this.cursos.agregarCurso(curso).pipe(
                map((c: Curso) => CursosActions.loadCursos())
            ))
        )
    });

    eliminarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.eliminarCurso),
            concatMap(({curso}) => this.cursos.eliminarCurso(curso).pipe(
                map((c: Curso) => CursosActions.loadCursos())
            ))
        )
    });

    editarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.editarCurso),
            concatMap(({curso}) => this.cursos.editarCurso(curso).pipe(
                map((c: Curso) => CursosActions.loadCursos())
            ))
        )
    });
}

