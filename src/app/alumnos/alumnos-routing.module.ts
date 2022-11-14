import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AlumnoInicioComponent } from './components/alumno-inicio/alumno-inicio.component';
import { AlumnoListaComponent } from './components/alumno-lista/alumno-lista.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AutenticacionGuard } from '../core/guards/autenticacion.guard';

const routes: Routes = [
    { path: '', component: AlumnoInicioComponent,
                canActivate: [AutenticacionGuard],
        children: [
        { path: 'listar', component: AlumnoListaComponent, canActivate: [AutenticacionGuard]},
        { path: 'agregar', component: AgregarAlumnoComponent, canActivate: [AutenticacionGuard] }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlumnosRoutingModule { }