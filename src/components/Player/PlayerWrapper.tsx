import React from 'react'

import PlayerAvatar from './PlayerAvatar'

const PlayerWrapper = () => {

	const avatars = [
		{
			'name':'Joe',
			'score':100
		},
		{
			'name':'Tom',
			'score':80
		}
	]

  return (
	<div className="players__avatars">
		{avatars.map((avatar,idx) =>
			<PlayerAvatar avatar={avatar} key={idx}/>
		)}
	</div>
  )
}

export default PlayerWrapper
