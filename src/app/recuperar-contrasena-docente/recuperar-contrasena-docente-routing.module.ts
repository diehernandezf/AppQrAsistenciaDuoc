import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarContrasenaDocentePage } from './recuperar-contrasena-docente.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarContrasenaDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarContrasenaDocentePageRoutingModule {}
