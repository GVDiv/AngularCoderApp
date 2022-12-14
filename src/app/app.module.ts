import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CursosModule } from './core/cursos/cursos.module';
import { CoreModule } from './core/core.module';
// import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AlumnosModule } from './alumnos/alumnos.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';


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
    AlumnosModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: 'Prueba ngrx' }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
