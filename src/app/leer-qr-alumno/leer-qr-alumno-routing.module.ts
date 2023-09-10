import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeerQrAlumnoPage } from './leer-qr-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: LeerQrAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeerQrAlumnoPageRoutingModule {}
