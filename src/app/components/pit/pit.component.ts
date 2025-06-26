import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pit } from '../../classes/pit';
import { GameService } from '../../services/game.service';
import { Size } from '../../classes/size';
import { pitSizeDifference } from '../../utils/helpers';

@Component({
  selector: 'app-pit',
  standalone: true,
  imports: [],
  templateUrl: './pit.component.html',
  styleUrl: './pit.component.less'
})
export class PitComponent{

  @Input() pit!: Pit;

  constructor(public gameService: GameService) {}

  clicking(click: MouseEvent) {

    let pitEvent = {
      pit: this.pit,
      event: click
    };

    this.gameService.pitClicked(pitEvent);

  }

  getPitValue() {
    let sadFace = "🦈"
    let value = ""

    if ( this.pit.isChosen )
      value = this.pit.value == "X" ?
            sadFace : this.pit.value;

    return value;
  }

  pitSize() {
    let pitAmount = this.gameService.boardSize.width;
    return ((20 - pitAmount) * pitSizeDifference(pitAmount)) + 20
  }
  

}
