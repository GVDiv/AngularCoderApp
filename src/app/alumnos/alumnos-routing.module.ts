import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { AlumnoListaComponent } from './components/alumno-lista/alumno-lista.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';

const routes: Routes = [
    { path: '', component: AlumnoInicioComponent, children: [
        { path: 'listar', component: AlumnoListaComponent},
        { path: 'agregar', component: AgregarAlumnoComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumnosRoutingModule { }