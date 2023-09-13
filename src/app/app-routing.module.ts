import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/:user',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'docente-page',
    loadChildren: () => import('./docente-page/docente-page.module').then( m => m.DocentePagePageModule)
  },
  {
    path: 'alumno-page',
    loadChildren: () => import('./alumno-page/alumno-page.module').then( m => m.AlumnoPagePageModule)
  },
  {
    path: 'generador-qrd/:userValue',
    loadChildren: () => import('./generador-qrd/generador-qrd.module').then( m => m.GeneradorQrdPageModule)
  },
  {
    path: 'leer-qr-alumno',
    loadChildren: () => import('./leer-qr-alumno/leer-qr-alumno.module').then( m => m.LeerQrAlumnoPageModule)
  },
  {
    path: 'alumno-registrado',
    loadChildren: () => import('./alumno-registrado/alumno-registrado.module').then( m => m.AlumnoRegistradoPageModule)
  },
  {
    path: 'recuperar-password-page',
    loadChildren: () => import('./recuperar-password-page/recuperar-password-page.module').then( m => m.RecuperarPasswordPagePageModule)
  },
  {
    path: 'recuperar-contrasena-docente',
    loadChildren: () => import('./recuperar-contrasena-docente/recuperar-contrasena-docente.module').then( m => m.RecuperarContrasenaDocentePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
