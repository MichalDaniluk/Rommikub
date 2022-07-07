import React from 'react'

import NavWrapper from '../components/Nav/NavWrapper'
import PlayerWrapper from '../components/Player/PlayerWrapper'

const  Game = () => {
  return (
	<>
	<nav>
		<NavWrapper />
	</nav>
	<main>
		<section className="players">
			<PlayerWrapper />
		</section>
		<section className="game game__board">

		</section>
	</main>
	</>
  )
}

export default Game
