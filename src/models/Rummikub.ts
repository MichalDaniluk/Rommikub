import Game from './Game'
import Player from './Player'
import Cube, { colors } from './Cube'

// players
const players:Player[] = []
players.push(new Player("Miki", new Cube(colors.black,1,false)))
players.push(new Player("Anna", new Cube(colors.black,1,false)))
players.push(new Player("Tomasz", new Cube(colors.black,1,false)))

// game
const game = new Game()
game.setGame(players)
game.setCubes()
game.setFirstPlayer()

console.log(game.getFirstPlayer())

// console.log(game.getAllCubes)
