import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarPasswordPagePage } from './recuperar-password-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPasswordPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPasswordPagePageRoutingModule {}
