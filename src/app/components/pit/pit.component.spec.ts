import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitComponent } from './pit.component';

describe('PitComponent', () => {
  let component: PitComponent;
  let fixture: ComponentFixture<PitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
