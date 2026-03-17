import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPaisComponent } from './agregar-pais.component';

describe('AgregarPaisComponent', () => {
  let component: AgregarPaisComponent;
  let fixture: ComponentFixture<AgregarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarPaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
