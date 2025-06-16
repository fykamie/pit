export class Pit {
    public isTagged: boolean;
    public isChosen: boolean;
    private _value: string;

    constructor (value: string) {
        this.isChosen = false;
        this.isTagged = false;
        this._value = value;
    }

    get value(): string { return this._value}
}
