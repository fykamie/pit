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

    public updateBoard() {

        for (let r = 0; r < this.size.height; r++) {
            for (let c = 0; c < this.size.width; c++) {
                if( this.board[r][c].value != "X") continue;

                this.setNearbyPits(r,c);
            }
        }
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
        // for (let trys = 0; trys < this._activePits; trys++) {
        //     let isTrying = true;
        //     while (isTrying) {
        //         let r = getRandomInt(0, this._size.height-1)
        //         let c = getRandomInt(0, this._size.width-1)
        //         if (board[r][c].value == "") {
        //             board[r][c]= new Pit ("X");
        //             isTrying = false;
        //         }
        //     }
        // }

        
        return board;
    }

    private setNearbyPits(r: number, c: number) {
        let total = 0;
        let _minr = r == 0 ? r : r-1;
        let _maxr = r == (this._size.height-1) ? r : r+1;
        let _minc = c == 0 ? c : c-1;
        let _maxc = c == (this._size.width-1) ? c : c+1;

        

        for (let minr = _minr; minr <= _maxr; minr++) {
            for(let minc= _minc; minc <= _maxc; minc++) {
                console.log(`${r}${c} --- ${minr}-${minc}: ${this.board[minr][minc].value}`);
                if (r == minr && c == minc) continue;
                if (this.board[minr][minc].value == "X") continue;

                let valueNum = this.board[minr][minc].value == "" ?
                       0 : Number.parseInt(this.board[minr][minc].value);
                console.log(`Old val[${minr}][${minc}]: ${valueNum}`);
                
                valueNum++;
                console.log(`Old val[${minr}][${minc}]: ${valueNum}`);

                this.board[minr][minc] = new Pit(valueNum.toString());

            }
        }

    }

}
