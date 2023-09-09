import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocentePagePageRoutingModule } from './docente-page-routing.module';

import { DocentePagePage } from './docente-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocentePagePageRoutingModule
  ],
  declarations: [DocentePagePage]
})
export class DocentePagePageModule {}
