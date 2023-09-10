import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneradorQrdPage } from './generador-qrd.page';

describe('GeneradorQrdPage', () => {
  let component: GeneradorQrdPage;
  let fixture: ComponentFixture<GeneradorQrdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeneradorQrdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
