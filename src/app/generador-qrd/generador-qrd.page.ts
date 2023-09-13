import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generador-qrd',
  templateUrl: './generador-qrd.page.html',
  styleUrls: ['./generador-qrd.page.scss'],
})
export class GeneradorQrdPage implements OnInit {
  //Definicion variables
  userValue: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const userValueFromParam = this.route.snapshot.paramMap.get('userValue');
    if (userValueFromParam !== null) {
      this.userValue = userValueFromParam;
    } else {
      this.userValue = ' '; // Asignar un valor en blanco
    }
  }

}
