import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Msg } from '../../classes/msg';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-msg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msg.component.html',
  styleUrl: './msg.component.less'
})
export class MsgComponent {
  public msg: Msg;

  constructor (gameService: GameService) {
    this.msg = gameService.msg;
  }

}
