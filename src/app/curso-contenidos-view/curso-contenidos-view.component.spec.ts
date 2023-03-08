import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoContenidosViewComponent } from './curso-contenidos-view.component';

describe('CursoContenidosViewComponent', () => {
  let component: CursoContenidosViewComponent;
  let fixture: ComponentFixture<CursoContenidosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoContenidosViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoContenidosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
