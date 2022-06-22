import Cube from './Cube'
import { getRandomInt } from '../components/utils'

class Player {
    private name:string
    private drawedCube: Cube

    public constructor(name:string) {
        this.name = name
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

	public drawCube(cubes:Cube[]): Cube {
        return cubes[ getRandomInt(1,104)]
	}
}

export default Player
