import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobannerDadosCursoComponent } from './herobanner-dados-curso.component';

describe('HerobannerDadosCursoComponent', () => {
  let component: HerobannerDadosCursoComponent;
  let fixture: ComponentFixture<HerobannerDadosCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerobannerDadosCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerobannerDadosCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
