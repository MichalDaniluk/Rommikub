import React from 'react';
import Game from '../src/models/Game'
import Player from '../src/models/Player'
import Cube, { colors } from '../src/models/Cube'

test('should add Players to the game', () => {
	const game = new Game()
	const players = [new Player('player1'), new Player('player2')]
	game.addPlayers(players)
	expect( game.howManyPlayes() ).toBe(2);
});


test('should create all Cubes for the game', () => {
	const game = new Game()
	game.createCubes()
	expect( game.howManyCubes() ).toBe(108);
});
