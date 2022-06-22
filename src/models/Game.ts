import Player from './Player'
import Series from './Series'
import Groups from './Groups'
import Cube, { colors } from './Cube'

class Game {
    private players: Player[]
    private series: Series[]
    private groups: Groups[]
    private firstPlayer: Player
    private cubes: Cube[]

	public constructor() {
		this.players = []
		this.series = []
		this.groups = []
		this.cubes = []
		this.firstPlayer = Object.create(null)
	}

    public addPlayers( players:Player[] ): void {
        this.players = players
    }

    public createCubes(): void {
        this.cubes = this.generateColorCubes(colors.red)
        .concat(this.generateColorCubes(colors.blue))
        .concat(this.cubes.concat( this.generateColorCubes(colors.orange) ))
        .concat(this.cubes.concat( this.generateColorCubes(colors.black) ))
        .concat( new Cube(colors.black, 0, true), new Cube(colors.black, 0, true) )
        .concat( new Cube(colors.red, 0, true), new Cube(colors.red, 0, true) )
    }

	public getPlayers(): Player[] {
		return this.players
	}

	public HowManyPlayers(): number {
		return this.getPlayers().length
	}

    public generateColorCubes(color:colors): Cube[] {
        let cubes: Cube[] = []
        for( let c=1; c <= 13; c++ ) cubes.push(new Cube(color ,c, false))
        for( let c=1; c <= 13; c++ ) cubes.push(new Cube(color ,c, false))
        return cubes
    }

    //public drawCube(player:Player): void {
    //    const allCubes = this.getAllCubes()
    //    player.setDrawedCube( allCubes[ this.getRandomInt(1,104)] )
    //}

    public getAllCubes(): Cube[] {
        return this.cubes
    }

	public howManyCubes(): number {
		return this.cubes.length
	}

    public howManyPlayes(): number {
        return this.players.length
    }



    public setFirstPlayer(): void {
        this.players.forEach(player => {
            player.drawCube(this.cubes)
        })

        this.players.sort( this.compareDrawedCubes )
        this.firstPlayer = this.players[this.players.length - 1]
    }

    public getFirstPlayer(): Player {
        return this.firstPlayer
    }

    //sort cubes only by numbers
    public compareDrawedCubes( player1:Player, player2:Player ) {
        if ( player1.getDrawedCubeNumber() < player2.getDrawedCubeNumber() ) {
          return -1;
        }
        if ( player1.getDrawedCubeNumber() > player2.getDrawedCubeNumber() ) {
          return 1;
        }
        return 0;
    }
}

export default Game
