import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorQrdPageRoutingModule } from './generador-qrd-routing.module';

import { GeneradorQrdPage } from './generador-qrd.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneradorQrdPageRoutingModule,
  ],
  declarations: [GeneradorQrdPage]
})
export class GeneradorQrdPageModule {}
