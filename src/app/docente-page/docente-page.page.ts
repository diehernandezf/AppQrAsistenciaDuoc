import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente-page',
  templateUrl: './docente-page.page.html',
  styleUrls: ['./docente-page.page.scss'],
})
export class DocentePagePage implements OnInit {
  nombre = 'nombre';
  apellido = 'apellido';
  isCleaning = false;

  formulario = this.fb.group({
    nombre: ['', [Validators.required]],
    contrasenia: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) {}

  recuperarContrasena() {
    // Aquí puedes realizar cualquier lógica adicional necesaria antes de la redirección

    // Luego, redirigir al usuario a la página "RecuperarPassword_page"
    this.router.navigate(['/recuperar-password-page']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnInit() {}

  goGeneradorQr() {
    const userValue = this.formulario.get('nombre')?.value;
    this.navCtrl.navigateRoot(`/generador-qrd/${userValue}`);
  }

  limpiarFormulario() {
    this.isCleaning = true;
    setTimeout(() => {
      this.formulario.reset({
        nombre: '', // Establece el valor inicial para el campo "nombre"
        contrasenia: '', // Establece el valor inicial para el campo "contrasenia"
      });
      this.isCleaning = false;
    }, 1000);
  }
}
