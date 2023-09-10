import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente-page',
  templateUrl: './docente-page.page.html',
  styleUrls: ['./docente-page.page.scss'],
})
export class DocentePagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goDocenteQr(){
    this.navCtrl.navigateForward('/generador-qrd')
  }

}
