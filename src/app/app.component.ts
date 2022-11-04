import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sesion$!: Observable<Sesion>;
  opened = false;
  
  constructor(
    private sesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }
  title = 'demo';
}

