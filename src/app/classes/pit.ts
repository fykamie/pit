export class Pit {
    public isTagged: boolean;
    public isChosen: boolean;
    public value: string;

    constructor () {
        this.isChosen = false;
        this.isTagged = false;
        this.value = "";
    }
}
