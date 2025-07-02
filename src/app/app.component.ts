import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
 
  constructor(public gameService: GameService, public router: Router) {
  }

  @HostListener('document:contextmenu', ['$event'])
    onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  newGame() {
    this.gameService.newGame();
  }
}
