import { Injectable } from '@angular/core';
import { PitBoard } from '../classes/pit-board';
import { PitBoardSize } from '../classes/pit-board-size';
import { PitEvent } from '../classes/pit-event';
import { Pit } from '../classes/pit';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public pitBoard: PitBoard;
  public boardSize: PitBoardSize;
  public sumActivePits: number;

  constructor() {
    this.sumActivePits = 2;
    this.boardSize = {width: 3, height: 4}
    this.pitBoard = new PitBoard(this.boardSize, this.sumActivePits);
  }

  public pitClicked(pitEv: PitEvent) {

    if (pitEv.event.button == 2) {
      pitEv.pit.isTagged = !pitEv.pit.isTagged;
      return;
    }

    if(pitEv.event.button == 0) {
      pitEv.pit.isChosen = true;
      pitEv.pit.isTagged = false;
      
      this.pitBoard.setNearbyPitsChosenness(this.findPit(pitEv.pit));
    }
  }

  public generateNewBoard(size: PitBoardSize, sumActivePits: number) {
    this.pitBoard = new PitBoard(size,sumActivePits);
  }

  private findPit(pit: Pit): {r: number, c: number} {
    let rowIndex = -1;
    let colIndex = -1;

    for (let i = 0; i < this.pitBoard.board.length; i++) {
      const row = this.pitBoard.board[i];
      const j = row.findIndex(p => p === pit);
      if (j !== -1) {
        rowIndex = i;
        colIndex = j;
        break;
      }
    }

    return {r: rowIndex, c: colIndex}
  }

}
