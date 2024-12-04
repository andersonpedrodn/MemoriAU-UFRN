import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDadosCursoComponent } from './main-dados-curso.component';

describe('MainDadosCursoComponent', () => {
  let component: MainDadosCursoComponent;
  let fixture: ComponentFixture<MainDadosCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDadosCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainDadosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
