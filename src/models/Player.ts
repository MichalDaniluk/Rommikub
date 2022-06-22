import Cube from './Cube'
import Game from './Game'

class Player {
    private name:string
    private drawedCube: Cube
    private game: Game

    public constructor(name:string) {
        this.name = name
		this.game = Object.create(null)
        this.drawedCube = Object.create(null)
    }

    public setDrawedCube(drawedCube:Cube) {
        this.drawedCube = drawedCube
    }

	public getName(): string {
		return this.name
	}

    public getDrawedCube(): Cube {
        return this.drawedCube
    }

    public getDrawedCubeNumber(): number {
        return this.drawedCube.getNumber()
    }
}

export default Player
