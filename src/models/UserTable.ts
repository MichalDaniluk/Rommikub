import Cube from './Cube';
import Player from './Player'

class UserTable {
    private cubes:Cube[]
    private owner:Player

	public constructor() {
		this.cubes = Object.create(null)
		this.owner = Object.create(null)
	}
}

export default UserTable
