import { Injectable } from '@angular/core';
import { PitBoard } from '../classes/pit-board';
import { Size } from '../classes/size';
import { PitEvent } from '../classes/pit-event';
import { Pit } from '../classes/pit';
import { Msg } from '../classes/msg';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public pitBoard: PitBoard;
  public boardSize: Size;
  public msg: Msg;
  public minCol: number;
  public activePit: number;
  public minActivePit: number;
  public minRow: number;
  public maxCol: number;
  public maxRow: number;
  public maxActivePit: number;
  public isGameEnded: boolean;


  constructor() {
    this.msg = {isShown: false, text:""}
    this.minActivePit = 8;
    this.activePit = this.minActivePit;
    this.minCol = 6;
    this.minRow = 6;
    this.maxCol = 20;
    this.maxRow = 20;
    this.maxActivePit = 85;
    this.boardSize = {width: 9, height: 9}
    this.pitBoard = new PitBoard(this.boardSize, this.activePit);
    this.isGameEnded = false;
  }

  public pitClicked(pitEv: PitEvent) {
    if (pitEv.pit.isChosen) return;

    if (pitEv.event.button == 2) {
      pitEv.pit.isTagged = !pitEv.pit.isTagged;
      return;
    }

    if(pitEv.event.button == 0) {
      pitEv.pit.isChosen = true;
      pitEv.pit.isTagged = false;
      this.pitBoard.setNearbyPitsChosenness(this.findPit(pitEv.pit));
      this.checkEndGame(pitEv);
      
    }
  }

  public newGame() {
    this.isGameEnded = false;
    this.msg.isShown = false;
    this.msg.text = "";

    this.generateNewBoard(this.boardSize, this.activePit)
  }

  public generateNewBoard(size: Size, sumActivePits: number) {
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
      this.isGameEnded = true;
      this.msg.text = "Vesztettél 😢"
      this.msg.isShown = true;
      this.showAllPits();
      return;
    }
    
    if (this.checkAllSafePitsChosen()) {
      this.isGameEnded = true;
      this.msg.text = "Győzelem!! 🌞"
      this.msg.isShown = true;
      return;
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

  private showAllPits() {
    for (let r = 0; r < this.pitBoard.board.length; r++) {
      for (let c = 0; c < this.pitBoard.board[r].length; c++) {
        this.pitBoard.board[r][c].isChosen = true;
      }
    }
  }

}
