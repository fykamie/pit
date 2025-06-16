import { getRandomInt } from "../utils/helpers";
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

        //Place active pits
        for (let trys = 0; trys < this._activePits; trys++) {
            let isTrying = true;
            while (isTrying) {
                let r = getRandomInt(0, this._size.height-1)
                let c = getRandomInt(0, this._size.width-1)
                if (board[r][c].value == "") {
                    board[r][c]= new Pit ("X");
                    isTrying = false;
                }
            }
        }

        
        return board;
    }

}
