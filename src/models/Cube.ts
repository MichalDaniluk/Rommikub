export enum colors {
    red,
    blue,
    black,
    orange
}

class Cube {
    private color:colors
    private number:number
    private jocker:boolean

    public constructor(color:colors, number:number, jocker:boolean) {
        this.color = color
        this.number = number
        this.jocker = jocker
    }

    public getNumber(): number {
        return this.number
    }
}

export default Cube