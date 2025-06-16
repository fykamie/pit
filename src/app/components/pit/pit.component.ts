import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pit } from '../../classes/pit';
import { PitEvent } from '../../classes/pit-event';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-pit',
  standalone: true,
  imports: [],
  templateUrl: './pit.component.html',
  styleUrl: './pit.component.less'
})
export class PitComponent{

  @Input() pit!: Pit;

  constructor(private gameService: GameService) {}

  clicking(click: MouseEvent) {

    let pitEvent = {
      pit: this.pit,
      event: click
    };

    this.gameService.pitClicked(pitEvent);

  }

  getPitValue() {
    return this.pit.isChosen ?
       this.pit.value :
       ""
  }
  

}
