import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerQrAlumnoPageRoutingModule } from './leer-qr-alumno-routing.module';

import { LeerQrAlumnoPage } from './leer-qr-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerQrAlumnoPageRoutingModule
  ],
  declarations: [LeerQrAlumnoPage]
})
export class LeerQrAlumnoPageModule {}
