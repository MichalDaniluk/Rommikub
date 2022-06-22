import Cube from './Cube'

abstract class Cubes {
    private cubes:Cube[] = []

    public howManyCubes():number {
        return this.cubes.length
    }

    public getCubes():Cube[] {
        return this.cubes
    }
}

export default Cubes
