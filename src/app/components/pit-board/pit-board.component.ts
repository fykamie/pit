import { Component } from '@angular/core';
import { PitComponent } from "../pit/pit.component";
import { PitBoard } from '../../classes/pit-board';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pit-board',
  standalone: true,
  imports: [CommonModule,PitComponent],
  templateUrl: './pit-board.component.html',
  styleUrl: './pit-board.component.less'
})
export class PitBoardComponent {
  public pitBoard: PitBoard;

  constructor() {
    this.pitBoard = new PitBoard({width: 5, height: 6}, 3);
    console.log(this.pitBoard.board);
    
  }

}
