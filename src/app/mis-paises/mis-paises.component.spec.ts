import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPaisesComponent } from './mis-paises.component';

describe('MisPaisesComponent', () => {
  let component: MisPaisesComponent;
  let fixture: ComponentFixture<MisPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisPaisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
