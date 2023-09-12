import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarContrasenaDocentePage } from './recuperar-contrasena-docente.page';

describe('RecuperarContrasenaDocentePage', () => {
  let component: RecuperarContrasenaDocentePage;
  let fixture: ComponentFixture<RecuperarContrasenaDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarContrasenaDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
