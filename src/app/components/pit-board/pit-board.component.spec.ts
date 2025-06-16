import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitBoardComponent } from './pit-board.component';

describe('PitBoardComponent', () => {
  let component: PitBoardComponent;
  let fixture: ComponentFixture<PitBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PitBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PitBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
