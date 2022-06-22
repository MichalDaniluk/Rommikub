import Cube from './Cube'
import Game from './Game'

class Player {
    private name:string
    private drawedCube: Cube
    private game: Game = new Game()

    public constructor(name:string, drawedCube:Cube) {
        this.name = name
        this.drawedCube = drawedCube
    }

    public setDrawedCube(drawedCube:Cube) {
        this.drawedCube = drawedCube
    }

    public getDrawedCube(): Cube {
        return this.drawedCube
    }

    public getDrawedCubeNumber(): number {
        return this.drawedCube.getNumber()
    }
}

export default Player
