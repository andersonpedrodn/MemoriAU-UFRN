import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDoCursoComponent } from './dados-do-curso.component';

describe('DadosDoCursoComponent', () => {
  let component: DadosDoCursoComponent;
  let fixture: ComponentFixture<DadosDoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosDoCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosDoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
