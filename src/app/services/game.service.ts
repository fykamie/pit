import { Injectable } from '@angular/core';
import { PitBoard } from '../classes/pit-board';
import { PitBoardSize } from '../classes/pit-board-size';
import { PitEvent } from '../classes/pit-event';
import { Pit } from '../classes/pit';
import { Msg } from '../classes/msg';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public pitBoard: PitBoard;
  public boardSize: PitBoardSize;
  public sumActivePits: number;
  public msg: Msg;

  constructor() {
    this.sumActivePits = 2;
    this.boardSize = {width: 3, height: 4}
    this.pitBoard = new PitBoard(this.boardSize, this.sumActivePits);
    this.msg = {isShown: false, text:""}
  }

  public pitClicked(pitEv: PitEvent) {

    if (pitEv.event.button == 2) {
      pitEv.pit.isTagged = !pitEv.pit.isTagged;
      return;
    }

    if(pitEv.event.button == 0) {
      pitEv.pit.isChosen = true;
      pitEv.pit.isTagged = false;
      this.checkEndGame(pitEv);
      
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

  private checkEndGame (lastClick: PitEvent) {
    if (lastClick.event.button == 2 || lastClick.event.button == 1) return;

    if (lastClick.pit.value == "X") {
      this.msg.text = "Vesztettél :("
      this.msg.isShown = true;
    }

    if (this.checkAllSafePitsChosen()) {
      this.msg.text = "Győzelem!! :)"
      this.msg.isShown = true;
    }

  }

  private checkAllSafePitsChosen() {
    for (let r = 0; r < this.pitBoard.board.length; r++) {
      for (let c = 0; c < this.pitBoard.board[r].length; c++) {
        let pit = this.pitBoard.board[r][c];
        if (!pit.isChosen && pit.value != "X") return false;
      }
    }

    return true;
  }

}
