import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CursosModule } from './cursos/cursos.module';
import { CoreModule } from './core/core.module';
// import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AlumnosModule } from './alumnos/alumnos.module';

@NgModule({
  declarations: [
    AppComponent,
    // ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    AutenticacionModule,
    CursosModule,
    AlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
