import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';
import { DialogExitoComponent } from '../dialog-exito/dialog-exito.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup;

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private fb: FormBuilder,
    private dialogExito: MatDialog,
  ) {
    this.formularioRegistro = fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      estudiante: new FormControl(false, [Validators.required]),
      admin: new FormControl(false, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  registro(){
    const u: Usuario = {
      usuario: this.formularioRegistro.value.usuario,
      contrasena: this.formularioRegistro.value.contrasena,
      estudiante: this.formularioRegistro.value.estudiante,
      admin: this.formularioRegistro.value.admin,
    }
    this.sesionService.registro(u);

    const dialogExito = this.dialogExito.open(DialogExitoComponent);
    setTimeout(()=> {
      dialogExito.close();
    }, 2000)
    this.router.navigate([''])
  }

  ingresar(){
    this.router.navigate(['autenticacion/login'])
  }

}
