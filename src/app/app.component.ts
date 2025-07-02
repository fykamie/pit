import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PitBoardComponent } from "./components/pit-board/pit-board.component";
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PitBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  constructor(public gameService: GameService) {}

  @HostListener('document:contextmenu', ['$event'])
    onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  newGame() {
    this.gameService.newGame();
  }
}
