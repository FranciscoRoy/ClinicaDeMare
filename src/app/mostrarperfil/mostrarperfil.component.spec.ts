import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarperfilComponent } from './mostrarperfil.component';

describe('MostrarperfilComponent', () => {
  let component: MostrarperfilComponent;
  let fixture: ComponentFixture<MostrarperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarperfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
