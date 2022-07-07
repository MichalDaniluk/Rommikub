import React from 'react';
import Player from '../src/models/Player'
import Cube, { colors } from '../src/models/Cube'
import Game from '../src/models/Game'

test('should create new Player', () => {
	const player = new Player('Test player name')
	expect( player.getName() ).toBe('Test player name');
});


test('should draw cube', () => {
	const player = new Player('test1')
	const game = new Game()
	game.createCubes()
	let cube = player.drawCube( game.getAllCubes() )
	expect( Object.prototype.toString.call(cube) ).toBe('[object Object]');
});

test('should add new cube to his board', () => {
	const player = new Player('test1')
	let cube = new Cube(colors.black, 1, false)
	player.addCubeToBoard( cube)
	expect( player.isCubeExistsInBoard(cube) ).toBe(true);
});

