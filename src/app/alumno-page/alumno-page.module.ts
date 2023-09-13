import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPagePageRoutingModule } from './alumno-page-routing.module';

import { AlumnoPagePage } from './alumno-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlumnoPagePage]
})
export class AlumnoPagePageModule {}
