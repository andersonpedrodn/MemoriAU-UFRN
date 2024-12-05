import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSobreComponent } from './main-sobre.component';

describe('MainSobreComponent', () => {
  let component: MainSobreComponent;
  let fixture: ComponentFixture<MainSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSobreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
