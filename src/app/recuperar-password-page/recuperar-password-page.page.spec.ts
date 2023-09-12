import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPasswordPagePage } from './recuperar-password-page.page';

describe('RecuperarPasswordPagePage', () => {
  let component: RecuperarPasswordPagePage;
  let fixture: ComponentFixture<RecuperarPasswordPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarPasswordPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
