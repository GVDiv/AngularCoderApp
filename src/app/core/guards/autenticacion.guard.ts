import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(
    private sesion: SesionService,
    private router: Router
  ){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        if(sesion.usuarioActivo?.estudiante){
          return true;
        }else if(sesion.usuarioActivo?.admin){
          return true;
        }else{
          alert("No tiene permisos para acceder a este sitio");
          this.router.navigate(['autenticacion/login']);
          return false;
        }
      })
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    // return this.sesion.obtenerSesion().pipe(
    //   map((sesion: Sesion) => {
    //     if(sesion.usuarioActivo?.estudiante){
    //       return true;
    //     } else {
    //       alert("No tiene permisos para acceder a este sitio");
    //       this.router.navigate(['autenticacion/login']);
    //       return false
    //     }
    //   })
    // )
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
      // return this.sesion.obtenerSesion().pipe(
      //   map((sesion: Sesion) => {
      //     if(sesion.usuarioActivo?.canLoad){
      //       return true;
      //     } else {
      //       // alert("No tiene permisos para acceder a este sitio");
      //       this.router.navigate(['autenticacion/login']);
      //       return false
      //     }
      //   })
      // )
  }
}
