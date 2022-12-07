import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SesionService } from 'src/app/core/services/sesion.service';
import { loadSesionActiva } from 'src/app/core/state/sesion.actions';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<Sesion>
  ){
    this.formularioLogin = fb.group({

      // USUARIOS DE MOCKAPI
      // usuario estudiante: user: Mariela52, contrasena: rd5YGDpiL9ppq56
      // usuario admin: user: Weldon13, contrasena: LfddWjfTFJw_94f
      // usuario admin y estudiante: user: Candice_Medhurst49, contrasena: i61SDS1n5CBz9EJ

      usuario: new FormControl('Weldon13', [Validators.required]),
      contrasena: new FormControl('LfddWjfTFJw_94f', [Validators.required, Validators.minLength(6)]),
      estudiante: new FormControl(false, [Validators.required]),
      admin: new FormControl(false, [Validators.required])
    })
  }



  ngOnInit(): void {
  }

  login(){
    let u: Usuario = {
      usuario: this.formularioLogin.value.usuario,
      contrasena: this.formularioLogin.value.contrasena,
      estudiante: this.formularioLogin.value.estudiante,
      admin: this.formularioLogin.value.admin,
    }
    this.sesionService.login(u).subscribe((usuario: Usuario)=>{
      this.store.dispatch(loadSesionActiva({ usuarioActivo: usuario}))
      this.router.navigate(['inicio']);
    });

  }

}
