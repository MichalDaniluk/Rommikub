import Cube, { colors } from './Cube';
import Player from './Player'

class UserTable {
    private cubes:Cube[] = []
    private owner:Player = new Player('computer', new Cube(colors.black, 1, false))
}

export default UserTable
