import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarPasswordPagePageRoutingModule } from './recuperar-password-page-routing.module';

import { RecuperarPasswordPagePage } from './recuperar-password-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPasswordPagePageRoutingModule
  ],
  declarations: [RecuperarPasswordPagePage]
})
export class RecuperarPasswordPagePageModule {}
