import { Component } from '@angular/core';
import { PitComponent } from "../pit/pit.component";
import { PitBoard } from '../../classes/pit-board';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pit-board',
  standalone: true,
  imports: [CommonModule,FormsModule,PitComponent],
  templateUrl: './pit-board.component.html',
  styleUrl: './pit-board.component.less'
})
export class PitBoardComponent {
  
  constructor(public gameService: GameService) {}

}
