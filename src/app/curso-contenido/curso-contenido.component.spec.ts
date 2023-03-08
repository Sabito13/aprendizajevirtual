import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoContenidoComponent } from './curso-contenido.component';

describe('CursoContenidoComponent', () => {
  let component: CursoContenidoComponent;
  let fixture: ComponentFixture<CursoContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
