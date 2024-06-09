import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaprincipalComponent } from './ventanaprincipal.component';

describe('VentanaprincipalComponent', () => {
  let component: VentanaprincipalComponent;
  let fixture: ComponentFixture<VentanaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaprincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
