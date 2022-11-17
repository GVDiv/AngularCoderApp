import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando no ingreso un nombre de usuario', () => {
    const formularioLogin = component.formularioLogin;
    const usuario = formularioLogin.controls['usuario'];

    usuario.setValue('123321');

    expect(formularioLogin.valid).toBeFalse();
    })
  
  it('El formulario se mantiene valido cuando ingreso un nombre de usuario', () => {
    const formularioLogin = component.formularioLogin;
    const usuario = formularioLogin.controls['usuario'];

    usuario.setValue('Gabriel');

    expect(formularioLogin.valid).toBeTrue();

  })





  })