import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistroComponent } from './components/registro/registro.component';
import { DialogExitoComponent } from './components/dialog-exito/dialog-exito.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    DialogExitoComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule
  ]
})
export class AutenticacionModule { }
