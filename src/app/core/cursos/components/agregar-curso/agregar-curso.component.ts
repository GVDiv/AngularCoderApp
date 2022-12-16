import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExitoComponent } from 'src/app/autenticacion/components/dialog-exito/dialog-exito.component';
import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state';
import { agregarCurso } from '../../state/cursos.actions';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<AgregarCursoComponent>,
    private dialogExito: MatDialog,
    private storeCursos: Store<CursoState>,

    @Inject(MAT_DIALOG_DATA) public data: Curso,
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      inicio: new FormControl('', [Validators.required]),
      fin: new FormControl('', [Validators.required]),
      inscripcionAbierta: new FormControl('', [Validators.required])
    });
  }

  agregarCurso(){
    const curso: Curso = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    };
    this.dialogRef.close();
    this.storeCursos.dispatch(agregarCurso({curso}))
    const dialogExito = this.dialogExito.open(DialogExitoComponent);
    setTimeout(()=> {
      dialogExito.close();
    }, 2000)
    this.router.navigate(['cursos'])
  }

  ngOnInit(): void {
  }

}
