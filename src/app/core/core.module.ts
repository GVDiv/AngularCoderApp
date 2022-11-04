import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { SesionService } from './services/sesion.service';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    InicioComponent,
    PaginaNoEncontradaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    SesionService
  ],
  exports:[
    
  ]
})
export class CoreModule { }
