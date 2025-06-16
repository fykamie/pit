import { Pit } from "./pit";
import { PitBoardSize } from "./pit-board-size";

export class PitBoard {
    private _size: PitBoardSize;
    private _activePits: number;
    private _pitBoard : Pit[][];

    constructor(s: PitBoardSize, aP: number) {
        this._size = s;
        this._activePits = aP;
        this._pitBoard = this.getPitBoard();
    }

    
    public get size() : PitBoardSize {
        return this._size;
    }

    public get board() : Pit[][] {
        return this._pitBoard;
    }
    

    private getPitBoard() : Pit[][] {
        let board = [];

        //Empty board
        for (let rowsTotal = 0; rowsTotal < this._size.height; rowsTotal++) {
            let row = [];
            for (let colsTotal = 0; colsTotal < this._size.width; colsTotal++) {
                let pit = new Pit("");
                row[colsTotal] = pit;
            }
            board[rowsTotal] = row;
        }

        return board;
    }

}
