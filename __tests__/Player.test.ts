import React from 'react';
import Player from '../src/models/Player'
import Cube, { colors } from '../src/models/Cube'

test('should create new Player', () => {
	const player = new Player('Test player name')
	expect( player.getName() ).toBe('Test player name');
});
