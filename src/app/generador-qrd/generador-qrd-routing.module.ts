import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneradorQrdPage } from './generador-qrd.page';

const routes: Routes = [
  {
    path: '',
    component: GeneradorQrdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneradorQrdPageRoutingModule {}
