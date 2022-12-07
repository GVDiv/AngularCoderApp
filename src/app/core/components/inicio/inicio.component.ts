import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';
import { selectSesionActiva } from '../../state/sesion.selectors';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private store: Store<Sesion>
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.store.select(selectSesionActiva);
  }

  verLogin(){
    this.router.navigate(['autenticacion/login']);
  }

}
