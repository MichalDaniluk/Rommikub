import React from 'react'

import PlayerWrapper from '../components/Player/PlayerWrapper'
import UserBoardWrapper from '../components/UserBoard/UserBoardWrapper'
import Coffee from '../components/Coffee'

const Main = () => {
  return (
	<main>

		<section className="players">
			<PlayerWrapper />
		</section>
		<section className="game__board">
			<UserBoardWrapper />
			{/*<Coffee />*/}
		</section>

	</main>
  )
}

export default Main
