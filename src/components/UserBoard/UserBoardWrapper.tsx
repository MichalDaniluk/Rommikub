import React from 'react'

import Cube from '../Cube/Cube'

const UserBoardWrapper = () => {
  return (
	<div className="game__board--userboard">
		<Cube />
		<Cube />
		<Cube />
		<Cube />
	</div>
  )
}

export default UserBoardWrapper
