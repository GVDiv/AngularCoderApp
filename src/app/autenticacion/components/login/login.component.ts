import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
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
    private fb: FormBuilder
  ){
    this.formularioLogin = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      estudiante: new FormControl(false, [Validators.required]),
      admin: new FormControl(false, [Validators.required])
    })
  }

  

  ngOnInit(): void {
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formularioLogin.value.usuario,
      contrasena: this.formularioLogin.value.contrasena,
      estudiante: this.formularioLogin.value.estudiante,
      admin: this.formularioLogin.value.admin,
    }
    this.sesionService.login(usuario);
    this.router.navigate(['inicio']);
  }

}
