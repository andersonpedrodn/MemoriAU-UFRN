import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobannerSobreComponent } from './herobanner-sobre.component';

describe('HerobannerSobreComponent', () => {
  let component: HerobannerSobreComponent;
  let fixture: ComponentFixture<HerobannerSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerobannerSobreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerobannerSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
